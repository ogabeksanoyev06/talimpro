import { d as defineStore, a as useCookie, k as useNuxtApp } from './server.mjs';
import { p as parseQuestion } from './parseQuestion-BnEt1owC.mjs';
import { ref } from 'vue';
import { t as testType } from './testTypes-DX9gcdzZ.mjs';
import { useRouter } from 'vue-router';
import { u as useApi } from './useApi-B16mdXqT.mjs';

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const useActiveTestStore = defineStore("active-test", () => {
  const api = useApi();
  const { $toast } = useNuxtApp();
  const router = useRouter();
  const testTimer = ref(0);
  const testResult = useCookie("testResult");
  const loading = ref(false);
  const tests = ref({});
  const hasActiveTest = ref(false);
  const timerInterval = ref(null);
  const activeTestR = ref();
  const updateTests = async () => {
    try {
      const response = await api.post("tests/update-tests/");
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
    const subjectName = response.name || "";
    const testId = response.time_interval.id;
    const testTypeId = response.test_type_id || null;
    const questions = formatQuestions(response.questions);
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
        return item.test_results.map((question) => {
          var _a;
          const science = ((_a = item.dtmtest_blog) == null ? void 0 : _a.type) === "compulsory" ? `${item.science} (majburiy fan)` : item.science;
          return {
            dtmtest_blog: item.dtmtest_blog,
            id: question.id,
            question: parseQuestion(question.question),
            answers: [parseQuestion(question.answer1), parseQuestion(question.answer2), parseQuestion(question.answer3), parseQuestion(question.answer4)],
            is_correct: question.is_correct,
            is_picked: question.is_picked,
            answer: question.answer,
            science
          };
        }).sort((a, b) => a.dtmtest_blog - b.dtmtest_blog);
      })
    };
  };
  const setTimer = async () => {
    if (timerInterval.value) {
      clearInterval(timerInterval.value);
    }
    timerInterval.value = setInterval();
  };
  const testFinish = async () => {
    var _a, _b, _c;
    const endpoint = {
      [testType.TYPE_DTM]: "tests/dtmtest/done/",
      [testType.TYPE_BLOG]: "tests/blogtest/done/",
      [testType.TYPE_SCHOOL]: "tests/schooltest/done/",
      [testType.TYPE_RESEARCH]: "tests/researchtest/done/"
    }[(_a = tests.value) == null ? void 0 : _a.type];
    if (!endpoint) {
      console.error("Unknown test type");
      return;
    }
    const payload = {
      question_id: null,
      total_result_id: tests.value.testId,
      answer: null,
      picked: null,
      finishing: true,
      ...((_b = tests.value) == null ? void 0 : _b.type) === testType.TYPE_RESEARCH && { test_type_id: (_c = tests.value) == null ? void 0 : _c.testTypeId }
    };
    try {
      const response = await api.post(endpoint, payload);
      testResult.value = response.result;
      clearInterval(timerInterval.value);
      testTimer.value = 0;
      router.push("/test-result");
    } catch (error) {
      console.log(error.response);
    }
  };
  const selectAnswer = async (questionId, answer, blogId) => {
    const endpoint = {
      [testType.TYPE_DTM]: "tests/dtmtest/done/",
      [testType.TYPE_BLOG]: "tests/blogtest/done/",
      [testType.TYPE_SCHOOL]: "tests/schooltest/done/",
      [testType.TYPE_RESEARCH]: "tests/researchtest/done/"
    }[tests.value.type];
    if (!endpoint) {
      console.error("Unknown test type");
      return;
    }
    const payload = {
      question_id: Number(questionId),
      total_result_id: tests.value.testId,
      answer,
      picked: true,
      finishing: false,
      ...tests.value.type === testType.TYPE_DTM && { blog_id: blogId.id }
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
    var _a, _b, _c;
    try {
      const response = await api.post("tests/get-test-live-time/", {
        test_type: (_a = tests.value) == null ? void 0 : _a.type,
        test_id: (_b = tests.value) == null ? void 0 : _b.testId
      });
      if (response.code === 200) {
        $toast.success(response.message);
        testTimer.value = (_c = response == null ? void 0 : response.data) == null ? void 0 : _c.left_time.toFixed(0);
      }
    } catch (error) {
      $toast.error(error.response.data.message);
    }
  };
  const getActiveTest = async () => {
    loading.value = true;
    try {
      const response = await api.get("tests/active-tests/");
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

export { useActiveTestStore as u };
//# sourceMappingURL=ActiveTestStore-kLnQEG9L.mjs.map
