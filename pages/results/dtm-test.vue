<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from '~/components/ui/button/Button.vue';
import { useResultStore } from '~/stores/ResultStore';

const resultStore = useResultStore();

const route = useRoute();
const router = useRouter();
const selectedQuestion = ref({});
const testNumber = useCookie('testNumber', { default: () => 0 });

const getActiveTestNumber = (number) => {
   if (number !== testNumber.value) {
      testNumber.value = number;
      selectedQuestions();
   }
};

const selectedQuestions = () => {
   selectedQuestion.value = resultStore.testResultId?.questions[testNumber.value];
};

const totalBasic = computed(() => {
   return resultStore.testResultId.value?.blogs?.filter((blog) => blog.type === 'basic' && blog.total_ball > 0).reduce((sum, blog) => sum + blog.total_ball, 0);
});

const totalCompulsory = computed(() => {
   return resultStore.testResultId.value?.blogs?.filter((blog) => blog.type === 'compulsory' && blog.total_ball > 0).reduce((sum, blog) => sum + blog.total_ball, 0);
});

onMounted(async () => {
   await resultStore.getResultTestId({
      id: route.query.test_id,
      type: route.query.test_type
   });
   selectedQuestions();
});

onBeforeUnmount(() => {
   testNumber.value = 0;
});
</script>

<template>
   <div class="py-8 sm:py-12">
      <div class="container">
         <div class="flex flex-col space-y-6">
            <h3 class="text-xl font-semibold text-center">
               {{ selectedQuestion?.science }}
            </h3>
            <div class="flex flex-col gap-3">
               <div
                  class="flex flex-col gap-2 border-2 p-4"
                  :class="{
                     'border-green-500': selectedQuestion?.is_correct && selectedQuestion?.is_picked,
                     'border-destructive': selectedQuestion?.is_picked && !selectedQuestion?.is_correct,
                     'border-secondary': !(selectedQuestion?.is_correct && selectedQuestion?.is_picked) && !(selectedQuestion?.is_picked && !selectedQuestion.is_correct)
                  }"
               >
                  <div class="question flex items-start text-base">
                     <b id="question_number" class="mr-1"> {{ testNumber + 1 }}. </b>
                     <span class="flex flex-wrap" v-html="selectedQuestion?.question"></span>
                  </div>
                  <div>
                     <span class="!text-green-500" v-if="selectedQuestion?.is_correct && selectedQuestion?.is_picked">(To'g'ri)</span>
                     <span class="text-destructive" v-if="selectedQuestion?.is_picked && !selectedQuestion?.is_correct">(Xato)</span>
                     <span class="text-destructive" v-if="!selectedQuestion?.is_picked">(Belgilanmagan)</span>
                  </div>
                  <ul class="flex flex-col gap-2">
                     <li
                        class="text-sm border rounded flex items-start gap-1 p-3"
                        v-for="(answer, aIndex) in selectedQuestion?.answers"
                        :key="aIndex"
                        :class="{
                           'border-green-500 text-green-500': selectedQuestion?.is_correct && selectedQuestion?.is_picked && selectedQuestion?.answer === aIndex + 1,
                           'text-destructive border-destructive': !selectedQuestion?.is_correct && selectedQuestion?.is_picked && selectedQuestion?.answer === aIndex + 1
                        }"
                     >
                        <span class="font-semibold">
                           {{ resultStore.answerLabels[aIndex] + ')' }}
                        </span>
                        <span v-html="answer"> </span>
                     </li>
                  </ul>
               </div>
            </div>
            <div>
               <ul class="flex flex-wrap gap-1 justify-center">
                  <Button
                     v-for="(question, index) in resultStore.testResultId?.questions"
                     :key="index"
                     :variant="
                        question.is_correct && question.is_picked && question.answer
                           ? 'default'
                           : !question.is_correct && question.is_picked && question.answer
                           ? 'destructive'
                           : 'secondary'
                     "
                     :class="[
                        question.is_correct && question.is_picked && question.answer ? 'bg-green-500 hover:bg-green-500' : '',
                        index === testNumber ? 'border-foreground' : ''
                     ]"
                     @click="getActiveTestNumber(index)"
                     class="h-8 w-[40px] border-2"
                  >
                     {{ index + 1 }}
                  </Button>
               </ul>
            </div>
            <div class="border mt-6">
               <Table class="text-center whitespace-nowrap">
                  <TableBody>
                     <TableRow class="text-base">
                        <TableHead class="p-3 text-center"> Blog fanlari </TableHead>
                        <TableHead class="p-3 text-center"> To'g'ri javoblar </TableHead>
                        <TableHead class="p-3 text-center"> Ball </TableHead>
                        <TableHead class="p-3 text-center">To'plangan ball </TableHead>
                     </TableRow>
                     <TableRow class="font-medium" v-for="item in resultStore.testResultId?.blogs" :key="item.id">
                        <TableCell class="p-3">
                           {{ item.science }}
                        </TableCell>
                        <TableCell class="p-3">
                           <span class="text-green-600" style="font-size: large"> {{ item.correct_answers }} </span>
                        </TableCell>
                        <TableCell class="p-3"> {{ item.max_ball }} </TableCell>
                        <TableCell class="p-3 text-green-600" style="font-size: large"> {{ item.total_ball }} </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell class="p-3 font-bold text-base" colspan="4"> Natijalar</TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell class="p-3 font-semibold text-base" colspan="2"> Asosiy fandan to'plangan ball:</TableCell>
                        <TableCell class="p-3 font-semibold text-base" colspan="2"> {{ totalBasic }} </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell class="p-3 font-semibold text-base" colspan="2"> Majburiy fandan to'plangan ball:</TableCell>
                        <TableCell class="p-3 font-semibold text-base" colspan="2"> {{ totalCompulsory }} </TableCell>
                     </TableRow>
                     <TableRow>
                        <TableCell class="p-3 font-semibold text-base" colspan="2"> 5 ta fandan to'plangan ball:</TableCell>
                        <TableCell class="p-3 font-semibold text-base" colspan="2"> {{ totalBasic + totalCompulsory }} </TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </div>
            <NuxtLink :to="{ path: '/compare', query: { dtmTestId: route.query.test_id } }" class="mx-auto">
               <Button class="w-fit" @click="goToCompareLink">Solishtirish</Button>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>
