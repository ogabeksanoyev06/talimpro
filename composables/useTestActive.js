import { ref } from 'vue';
import { useRouter } from 'vue-router';

export const useActiveTest = () => {
   const router = useRouter();
   const { $toast } = useNuxtApp();

   const api = useApi();

   const testResult = useCookie('testResult');
   const loading = ref(false);
   const testTimer = ref(0);
   const tests = ref({});
   const hasActiveTest = ref(false);

   const setTimer = () => {
      const interval = setInterval(() => {
         if (testTimer.value <= 0) {
            testFinish();
            clearInterval(interval);
         } else {
            testTimer.value--;
         }
      }, 1000);
   };

   const timerFormat = (time) => {
      let sec_num = parseInt(time, 10);
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = sec_num - hours * 3600 - minutes * 60;

      const format = (num) => (num < 10 ? `0${num}` : num);

      return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
   };

   const blogTestFormattedQuestions = (response) => {
      tests.value = {
         subjectName: response.name,
         type: response.type,
         testId: response.time_interval.id,
         questions: response.questions.map((question) => {
            return {
               id: question.id,
               question: parseQuestion(question.question),
               answers: [parseQuestion(question.answer1), parseQuestion(question.answer2), parseQuestion(question.answer3), parseQuestion(question.answer4)],
               correctAnswer: question.correct_answer,
               isPicked: question.is_picked,
               answer: question.answer
            };
         })
      };
      console.log(tests.value);
   };

   const schoolTestFormattedQuestions = (response) => {
      tests.value = {
         subjectName: response.name,
         type: response.type,
         testId: response.time_interval.id,
         questions: response.questions.map((question) => {
            return {
               id: question.id,
               question: question.question,
               answers: [question.answer1, question.answer2, question.answer3, question.answer4],
               correctAnswer: question.correct_answer,
               isPicked: question.is_picked,
               answer: question.answer
            };
         })
      };
   };

   const researchTestFormattedQuestions = (response) => {
      tests.value = {
         subjectName: response.name,
         type: response.type,
         testId: response.time_interval.id,
         test_type_id: response.test_type_id,
         questions: response.questions.map((question) => {
            return {
               id: question.id,
               question: question.question,
               answers: [question.answer1, question.answer2, question.answer3, question.answer4],
               correctAnswer: question.correct_answer,
               isPicked: question.is_picked,
               answer: question.answer
            };
         })
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
                     isPicked: question.is_picked,
                     answer: question.answer,
                     science: science
                  };
               })
               .sort((a, b) => a.dtmtest_blog - b.dtmtest_blog);
         })
      };
   };

   const testFinish = async () => {
      let endpoint = '';
      let payload = {
         question_id: null,
         total_result_id: tests.value.testId,
         answer: null,
         picked: null,
         finishing: true
      };
      switch (tests.value.type) {
         case test.TYPE_DTM:
            endpoint = 'tests/dtmtest/done/';
            break;
         case test.TYPE_BLOG:
            endpoint = 'tests/blogtest/done/';
            break;
         case test.TYPE_SCHOOL:
            endpoint = 'tests/schooltest/done/';
            break;
         case test.TYPE_RESEARCH:
            endpoint = 'tests/researchtest/done/';
            payload.test_type_id = tests.value.test_type_id;
            break;
         default:
            console.error('Unknown test type');
            return;
      }
      try {
         const response = await api.post(endpoint, payload);
         testResult.value = response.result;
         console.log(response);
         router.push('/test-result');
      } catch (error) {
         console.log(error.response);
      }
   };

   const selectAnswer = async (question_id, answer, blog_id) => {
      let endpoint = '';
      let payload = {
         question_id: Number(question_id),
         total_result_id: tests.value.testId,
         answer: answer,
         picked: true,
         finishing: false
      };
      switch (tests.value.type) {
         case test.TYPE_DTM:
            endpoint = 'tests/dtmtest/done/';
            payload.blog_id = blog_id;
            break;
         case test.TYPE_BLOG:
            endpoint = 'tests/blogtest/done/';
            break;
         case test.TYPE_SCHOOL:
            endpoint = 'tests/schooltest/done/';
            break;
         case test.TYPE_RESEARCH:
            endpoint = 'tests/researchtest/done/';
            break;
         default:
            console.error('Unknown test type');
            return;
      }
      try {
         const response = await api.post(endpoint, payload);
         $toast.success(response.message);
         tests.value.questions.forEach((question) => {
            if (question.id === question_id) {
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
            test_type: tests.value.type,
            test_id: tests.value.testId
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
            case test.TYPE_BLOG:
               blogTestFormattedQuestions(response);
               hasActiveTest.value = true;
               break;
            case test.TYPE_SCHOOL:
               schoolTestFormattedQuestions(response);
               hasActiveTest.value = true;
               break;
            case test.TYPE_RESEARCH:
               researchTestFormattedQuestions(response);
               hasActiveTest.value = true;
               break;
            case test.TYPE_DTM:
               dtmTestFormattedQuestions(response);
               hasActiveTest.value = true;
               break;
            default:
               hasActiveTest.value = false;
               break;
         }
      } catch (error) {
         $toast.error(error.response.data.message);
         hasActiveTest.value = false;
      } finally {
         loading.value = false;
      }
   };

   return {
      loading,
      testTimer,
      tests,
      hasActiveTest,
      setTimer,
      timerFormat,
      testFinish,
      selectAnswer,
      getTestLiveTime,
      getActiveTest
   };
};
