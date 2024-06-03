import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useApi } from '@/composables/useApi';

export const useActiveTestStore = defineStore('active-test', () => {
   const api = useApi();
   const { $toast } = useNuxtApp();
   const router = useRouter();

   const testTimer = ref(0);
   const testResult = useCookie('testResult');
   const loading = ref(false);
   const tests = ref({});
   const hasActiveTest = ref(false);
   const timerInterval = ref(null);
   const activeTestR = ref();

   const updateTests = async () => {
      try {
         const response = await api.post('tests/update-tests/');
         console.log(response);
      } catch (error) {
         console.log(error);
      }
   };

   const formatQuestions = (questions, subjectName, type) => {
      return questions.map((question) => ({
         id: question.id,
         question: parseQuestion(question.question),
         answers: [parseQuestion(question.answer1), parseQuestion(question.answer2), parseQuestion(question.answer3), parseQuestion(question.answer4)],
         is_correct: question.is_correct,
         is_picked: question.is_picked,
         answer: question.answer
      }));
   };

   const formatTestData = (response, type) => {
      const subjectName = response.name || '';
      const testId = response.time_interval.id;
      const testTypeId = response.test_type_id || null;
      const questions = formatQuestions(response.questions, subjectName, type);

      tests.value = {
         subjectName,
         type,
         testId,
         testTypeId,
         questions
      };
   };

   const dtmTestFormattedQuestions = (response) => {
      tests.value = {
         type: response.type,
         testId: response.time_interval.id,
         questions: response.questions.flatMap((item) => {
            return item.test_results
               .map((question) => {
                  const science = item.dtmtest_blog?.type === 'compulsory' ? `${item.science} (majburiy fan)` : item.science;
                  return {
                     dtmtest_blog: item.dtmtest_blog,
                     id: question.id,
                     question: parseQuestion(question.question),
                     answers: [parseQuestion(question.answer1), parseQuestion(question.answer2), parseQuestion(question.answer3), parseQuestion(question.answer4)],
                     is_correct: question.is_correct,
                     is_picked: question.is_picked,
                     answer: question.answer,
                     science: science
                  };
               })
               .sort((a, b) => a.dtmtest_blog - b.dtmtest_blog);
         })
      };
   };

   const setTimer = async () => {
      // Eski intervalni to'xtatamiz, agar mavjud bo'lsa
      if (timerInterval.value) {
         clearInterval(timerInterval.value);
      }

      // Yangi intervalni yaratamiz
      timerInterval.value = setInterval(async () => {
         if (testTimer.value <= 2) {
            testFinish();
            clearInterval(timerInterval.value);
         } else {
            testTimer.value--;
         }
      }, 1000);
   };

   const testFinish = async () => {
      const endpoint = {
         [testType.TYPE_DTM]: 'tests/dtmtest/done/',
         [testType.TYPE_BLOG]: 'tests/blogtest/done/',
         [testType.TYPE_SCHOOL]: 'tests/schooltest/done/',
         [testType.TYPE_RESEARCH]: 'tests/researchtest/done/'
      }[tests.value?.type];
      if (!endpoint) {
         console.error('Unknown test type');
         return;
      }
      const payload = {
         question_id: null,
         total_result_id: tests.value.testId,
         answer: null,
         picked: null,
         finishing: true,
         ...(tests.value?.type === testType.TYPE_RESEARCH && { test_type_id: tests.value?.testTypeId })
      };
      try {
         const response = await api.post(endpoint, payload);
         testResult.value = response.result;
         clearInterval(timerInterval.value);
         testTimer.value = 0;
         router.push('/test-result');
      } catch (error) {
         console.log(error.response);
      }
   };

   const selectAnswer = async (questionId, answer, blogId) => {
      const endpoint = {
         [testType.TYPE_DTM]: 'tests/dtmtest/done/',
         [testType.TYPE_BLOG]: 'tests/blogtest/done/',
         [testType.TYPE_SCHOOL]: 'tests/schooltest/done/',
         [testType.TYPE_RESEARCH]: 'tests/researchtest/done/'
      }[tests.value.type];

      if (!endpoint) {
         console.error('Unknown test type');
         return;
      }

      const payload = {
         question_id: Number(questionId),
         total_result_id: tests.value.testId,
         answer,
         picked: true,
         finishing: false,
         ...(tests.value.type === testType.TYPE_DTM && { blog_id: blogId.id })
      };

      try {
         const response = await api.post(endpoint, payload);
         $toast.success(response.message);
         tests.value.questions.forEach((question) => {
            if (question.id === questionId) {
               question.is_picked = true;
               question.answer = answer;
            }
         });
      } catch (error) {
         $toast.error(error.response.data.message);
      }
   };

   const getTestLiveTime = async () => {
      try {
         const response = await api.post('tests/get-test-live-time/', {
            test_type: tests.value?.type,
            test_id: tests.value?.testId
         });
         if (response.code === 200) {
            $toast.success(response.message);
            testTimer.value = response?.data?.left_time.toFixed(0);
         }
      } catch (error) {
         $toast.error(error.response.data.message);
      }
   };

   const getActiveTest = async () => {
      loading.value = true;
      try {
         const response = await api.get('tests/active-tests/');
         activeTestR.value = response;
         switch (response.type) {
            case testType.TYPE_BLOG:
            case testType.TYPE_SCHOOL:
            case testType.TYPE_RESEARCH:
               formatTestData(response, response.type);
               hasActiveTest.value = true;
               break;
            case testType.TYPE_DTM:
               dtmTestFormattedQuestions(response);
               hasActiveTest.value = true;
               break;
            default:
               hasActiveTest.value = false;
               break;
         }
      } catch (error) {
         hasActiveTest.value = false;
      } finally {
         loading.value = false;
      }
   };

   return {
      loading,
      tests,
      hasActiveTest,
      testResult,
      testTimer,
      setTimer,
      testFinish,
      selectAnswer,
      getTestLiveTime,
      getActiveTest,
      updateTests,
      timerInterval
   };
});
