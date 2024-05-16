<script setup>
import { usePaymentStore } from '~/stores/payment';

definePageMeta({ layout: 'cabinet', middleware: 'auth' });

const paymentStore = usePaymentStore();

const selectedPaymentType = ref(1);

const paymentAmount = ref(null);

const paymentSelect = (paymentType) => {
   selectedPaymentType.value = paymentType;
};
const isNumber = (evt) => {
   evt = evt ? evt : window.event;
   let charCode = evt.which ? evt.which : evt.keyCode;
   if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      evt.preventDefault();
   } else {
      return true;
   }
};
</script>

<template>
   <div>
      <h4 class="text-base sm:text-xl font-semibold tracking-tight mb-4">To'lov turini tanlang</h4>
      <div
         class="inline-flex flex-wrap items-center gap-5 max-w-[250px] cursor-pointer border rounded-lg p-4 transition-all duration-300 hover:shadow hover:border-white"
         :class="{ '!border-primary': selectedPaymentType === 1 }"
         @click="paymentSelect(1)"
      >
         <img src="/assets/svg/payme.svg" alt="" class="w-20" />
      </div>

      <div class="flex flex-col gap-5 max-w-[450px] border rounded-lg p-5 mt-5 bg-card">
         <p class="text-sm text-foreground">Hisobni to'ldirish uchun kerakli miqdorni kiriting va to'lovni amalga oshirish tugmasini bosing. Minimal to'lov - 20000 so'm</p>
         <Input v-model="paymentAmount" placeholder="20 000" @keypress="isNumber($event)" />
         <Button :disabled="parseInt(paymentAmount) < 20000 || paymentAmount === null" @click="paymentStore.createPayment(paymentAmount)"> Hisobni to'ldirish </Button>
      </div>
   </div>
</template>
