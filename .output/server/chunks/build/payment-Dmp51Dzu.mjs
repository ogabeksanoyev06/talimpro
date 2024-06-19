import { d as defineStore } from './server.mjs';
import { ref } from 'vue';
import { u as useApi } from './useApi-B16mdXqT.mjs';

const usePaymentStore = defineStore("payment", () => {
  const api = useApi();
  const payments_history = ref([]);
  const loading = ref(false);
  const getPaymentsHistory = async () => {
    loading.value = true;
    try {
      const response = await api.get("users/payments/history/");
      payments_history.value = response;
    } catch (error) {
      console.log(error);
    } finally {
      loading.value = false;
    }
  };
  const createPayment = async (paymentAmount) => {
    try {
      const response = await api.post("payments/payme/FillUserBalance/", {
        amount: paymentAmount * 100
      });
      (void 0).open(response.result.link);
    } catch (error) {
      console.log(error);
    }
  };
  return { getPaymentsHistory, createPayment, payments_history };
});

export { usePaymentStore as u };
//# sourceMappingURL=payment-Dmp51Dzu.mjs.map
