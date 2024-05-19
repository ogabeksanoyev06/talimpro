import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '@/composables/useApi';
import { useTimerFormat } from '@/composables/useTimerFormat';

export const useActiveTestStore = defineStore('active-test', () => {
   const api = useApi();
   const { $toast } = useNuxtApp();

   const { setTimer } = useTimerFormat();

   const testTimer = ref(0);
   const testResult = useCookie('testResult');
   const loading = ref(false);
   const tests = ref({});
   const hasActiveTest = ref(false);

   const formatQuestions = (questions, subjectName, type) => {
      return questions.map((question) => ({
         id: question.id,
         question: parseQuestion(question.question),
         answers: [parseQuestion(question.answer1), parseQuestion(question.answer2), parseQuestion(question.answer3), parseQuestion(question.answer4)],
         correctAnswer: question.correct_answer,
         isPicked: question.is_picked,
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
                  const science = item.dtmtest_blog === 1 || item.dtmtest_blog === 2 ? item.science : `${item.science} (majburiy fan)`;
                  return {
                     dtmtest_blog: item.dtmtest_blog,
                     id: question.id,
                     question: parseQuestion(question.question),
                     answers: [parseQuestion(question.answer1), parseQuestion(question.answer2), parseQuestion(question.answer3), parseQuestion(question.answer4)],
                     correctAnswer: question.correct_answer,
                     isPicked: question.picked,
                     answer: question.answer,
                     science: science
                  };
               })
               .sort((a, b) => a.dtmtest_blog - b.dtmtest_blog);
         })
      };
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
         console.log(response);
         navigateTo('/test-result');
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
         ...(tests.value.type === testType.TYPE_DTM && { blog_id: blogId })
      };

      try {
         const response = await api.post(endpoint, payload);
         $toast.success(response.message);
         tests.value.questions.forEach((question) => {
            if (question.id === questionId) {
               question.isPicked = true;
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
         $toast.success(response.message);
         testTimer.value = response.data.left_time;
      } catch (error) {
         $toast.error(error.response.data.message);
         testFinish();
      }
   };

   const getActiveTest = async () => {
      loading.value = true;
      try {
         const response = await api.get('tests/active-tests/');
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
         console.log(error.response, 'sasasas');
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
      getActiveTest
   };
});
