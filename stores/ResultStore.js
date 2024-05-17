import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useApi } from '@/composables/useApi';

export const useResultStore = defineStore('results', () => {
   const api = useApi();
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

   const formatTest = (response, type) => {
      const formattedData = response.map((item) => {
         const science = item.type === 'compulsory' ? `${item.science} (majburiy fan)` : item.science;
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

      if (type === 'dtm') {
         const questions = formattedData.flatMap((item) => item.questions);
         const blogs = formattedData.map((item) => item.blogs);
         testResultId.value = { questions, blogs }; // Massivni o'ziga o'zgaruvchi sifatida ishlatish
      } else {
         testResultId.value = formattedData; // Yangi ro'yxatni o'zgaruvchiga tenglab berish
      }
   };

   const getResultTestId = async (data) => {
      try {
         const response = await api.get(`tests/tests-history/${data.id}/?type=${data.type}`);
         formatTest(response, data.type);
      } catch (error) {
         console.error(error);
      }
   };

   return { getResultTestId, testResultId, answerLabels };
});
