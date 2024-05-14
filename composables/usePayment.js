import { ref } from 'vue';

export const usePayment = () => {
   const api = useApi();
   const payments_history = ref([]);
   const loading = ref(false);

   const getPaymentsHistory = async (data) => {
      loading.value = true;
      try {
         const response = await api.get('users/payments/history/', data);
         payments_history.value = response;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const createPayment = async (paymentAmount) => {
      try {
         const response = await api.post('payments/payme/FillUserBalance/', {
            amount: paymentAmount * 100
         });
         window.open(response.result.link);
      } catch (error) {
         console.log(error);
      }
   };

   return { getPaymentsHistory, createPayment, payments_history };
};
