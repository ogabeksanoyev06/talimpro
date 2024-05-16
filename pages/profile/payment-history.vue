<script setup>
import { storeToRefs } from 'pinia';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { usePaymentStore } from '~/stores/payment';

definePageMeta({
   layout: 'cabinet'
});

const paymenStore = usePaymentStore();
const { payments_history, loading } = storeToRefs(paymenStore);

await paymenStore.getPaymentsHistory();
</script>

<template>
   <div>
      <h4 class="text-base sm:text-xl font-semibold tracking-tight mb-4">To'lovlar tarixi</h4>
      <div class="border rounded-md">
         <Table class="font-medium whitespace-nowrap">
            <TableHeader>
               <TableRow>
                  <TableHead class="h-12 px-4 text-center"> # </TableHead>
                  <TableHead class="h-12 px-4 text-center">To'lov turi</TableHead>
                  <TableHead class="h-12 px-4 text-center">To'lov miqdori</TableHead>
                  <TableHead class="h-12 px-4 text-center"> Sana</TableHead>
                  <TableHead class="h-12 px-4 text-center"> Statusi </TableHead>
               </TableRow>
            </TableHeader>
            <TableBody class="text-center">
               <TableRow v-for="(item, index) in payments_history?.results" :key="index">
                  <TableCell class="p-4 font-medium">
                     <span>{{ index + 1 }}</span>
                  </TableCell>
                  <TableCell>
                     <span>{{ item.payment_system }}</span>
                  </TableCell>
                  <TableCell class="p-4">
                     <span>{{ currencyFormat(item.amount / 100) }} so'm</span>
                  </TableCell>
                  <TableCell class="p-4">
                     <span>{{ dayjs(item.date).format('DD-MM-YYYY HH:mm:ss') }}</span>
                  </TableCell>
                  <TableCell class="p-4 flex justify-center">
                     <span class="text-primary" v-if="item.completed">To'langan</span>
                     <span class="text-red-600" v-else>To'lanmagan</span>
                  </TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </div>
   </div>
</template>
