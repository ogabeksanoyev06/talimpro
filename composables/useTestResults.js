import { ref } from 'vue';

export const useTestResults = () => {
   const api = useApi();
   const { $toast } = useNuxtApp();
   const router = useRouter();
   const loading = ref(false);

   const testResultId = ref([]);
   const answerLabels = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

   const formatQuestions = (questions, science, type) => {
      return questions.map((question) => ({
         id: question.id,
         question: question.question,
         answers: [question.answer1, question.answer2, question.answer3, question.answer4],
         is_correct: question.is_correct,
         is_picked: question.is_picked,
         answer: question.answer,
         science: type === 'compulsory' ? `${science} (majburiy fan)` : science
      }));
   };

   const formatBlogTest = (response, type) => {
      const formattedData = response.map((item) => {
         const science = item.science;
         const questions = formatQuestions(item.questions, science, type);
         const blogs = {
            science,
            type: item.type,
            test_type: type,
            question_count: item.question_count,
            correct_answers: item.correct_answers,
            max_ball: item.max_ball,
            total_ball: item.total_ball
         };

         return { questions, blogs };
      });

      testResultId.value.push(...formattedData);
   };

   const formatSchoolTest = (response, type) => {
      const formattedData = response.map((item) => {
         const science = item.science;
         const questions = formatQuestions(item.questions, science, type);
         const blogs = {
            science,
            type: item.type,
            test_type: type,
            question_count: item.question_count,
            correct_answers: item.correct_answers,
            max_ball: item.max_ball,
            total_ball: item.total_ball
         };

         return { questions, blogs };
      });

      testResultId.value.push(...formattedData);
   };

   const formatResearchTest = (response, type) => {
      const formattedData = response.map((item) => {
         const science = item.science;
         const questions = formatQuestions(item.questions, science, type);
         const blogs = {
            science,
            type: item.type,
            test_type: type,
            question_count: item.question_count,
            correct_answers: item.correct_answers,
            max_ball: item.max_ball,
            total_ball: item.total_ball
         };

         return { questions, blogs };
      });

      testResultId.value.push(...formattedData);
   };

   const formatDtmTest = (response, type) => {
      const questions = response.flatMap((item) => {
         const science = item.type === 'compulsory' ? `${item.science} (majburiy fan)` : item.science;
         return item.questions.map((question) => {
            return {
               id: question.id,
               question: question.question,
               answers: [question.answer1, question.answer2, question.answer3, question.answer4],
               is_picked: question.picked,
               answer: question.answer,
               science: science
            };
         });
      });

      const blogs = response.map((item) => {
         const science = item.type === 'compulsory' ? `${item.science} (majburiy fan)` : item.science;
         return {
            max_ball: item.max_ball,
            total_ball: item.total_ball,
            correct_answers: item.correct_answers,
            science: science,
            question_count: item.question_count,
            type: item.type
         };
      });
      testResultId.value = {
         questions: questions,
         blogs: blogs
      };
   };

   const getResultTestId = async (data) => {
      try {
         const response = await api.get(`tests/tests-history/${data.id}/?type=${data.type}`);
         switch (data.type) {
            case test.TYPE_DTM:
               formatDtmTest(response, data.type);
               break;
            case test.TYPE_BLOG:
               formatBlogTest(response, data.type);
               break;
            case test.TYPE_SCHOOL:
               formatSchoolTest(response, data.type);
               break;
            case test.TYPE_RESEARCH:
               formatResearchTest(response, data.type);
               break;
            default:
               break;
         }
      } catch (error) {
         console.error(error);
      }
   };

   return { getResultTestId, testResultId, answerLabels };
};
