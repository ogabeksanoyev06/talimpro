<script setup>
import { onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import Button from '~/components/ui/button/Button.vue';
import { useResultStore } from '~/stores/ResultStore';

const resultStore = useResultStore();

const route = useRoute();
const selectedQuestion = ref({});
const testNumber = useCookie('testNumber', { default: () => 0 });

const getActiveTestNumber = (number) => {
   if (number !== testNumber.value) {
      testNumber.value = number;
      selectedQuestions();
   }
};

const selectedQuestions = () => {
   selectedQuestion.value = resultStore.testResultId[0]?.questions[testNumber.value];
};

const typeName = computed(() => {
   let typeValue = '';
   const testType = resultStore.testResultId[0]?.blogs?.test_type;
   switch (testType) {
      case test.TYPE_DTM:
         typeValue = 'DTM test';
         break;
      case test.TYPE_BLOG:
         typeValue = 'Blog test';
         break;
      case test.TYPE_SCHOOL:
         typeValue = 'Maktab o`quvchilari uchun test';
         break;
      case test.TYPE_RESEARCH:
         typeValue = 'Xalqaro tadqiqot test';
         break;
      default:
         break;
   }
   return typeValue;
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
         <div v-for="(item, i) in resultStore.testResultId" :key="i" class="flex flex-col space-y-6">
            <div class="inline-flex justify-center w-full">
               <p class="text-[18px] text-center shadow-[0_0px_10px_rgba(0,0,0,.15)] font-bold py-3 px-6">
                  {{ selectedQuestion.science }}
               </p>
            </div>
            <div class="border">
               <Table class="font-medium whitespace-nowrap">
                  <TableHeader>
                     <TableRow>
                        <TableHead class="h-12 px-4 text-center"> Test turi </TableHead>
                        <TableHead class="h-12 px-4 text-center">Fan nomi</TableHead>
                        <TableHead class="h-12 px-4 text-center">Savollar soni</TableHead>
                        <TableHead class="h-12 px-4 text-center"> Ball</TableHead>
                        <TableHead class="h-12 px-4 text-center"> To'plangan ball </TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody class="text-center">
                     <TableRow>
                        <TableCell class="p-4 font-medium">
                           <span>{{ typeName }}</span>
                        </TableCell>
                        <TableCell>
                           <span>{{ resultStore.testResultId[0]?.blogs?.science }}</span>
                        </TableCell>
                        <TableCell class="p-4">
                           <span>{{ resultStore.testResultId[0]?.blogs?.question_count }}</span>
                        </TableCell>
                        <TableCell class="p-4">
                           <span>{{ resultStore.testResultId[0]?.blogs?.max_ball }}</span>
                        </TableCell>
                        <TableCell class="p-4 flex justify-center"> {{ resultStore.testResultId[0]?.blogs?.total_ball }} </TableCell>
                     </TableRow>
                  </TableBody>
               </Table>
            </div>
            <div class="flex flex-col gap-3">
               <div
                  class="flex flex-col gap-2 border-2 p-4"
                  :class="{
                     'border-green-500': selectedQuestion.is_correct && selectedQuestion.is_picked,
                     'border-destructive': selectedQuestion.is_picked && !selectedQuestion.is_correct,
                     'border-secondary': !(selectedQuestion.is_correct && selectedQuestion.is_picked) && !(selectedQuestion.is_picked && !selectedQuestion.is_correct)
                  }"
               >
                  <div class="question flex items-start text-base">
                     <b id="question_number" class="mr-1"> {{ testNumber + 1 }}. </b>
                     <span class="flex flex-wrap" v-html="selectedQuestion.question"></span>
                  </div>
                  <div>
                     <span class="!text-green-500" v-if="selectedQuestion.is_correct && selectedQuestion.is_picked">(To'g'ri)</span>
                     <span class="text-destructive" v-if="selectedQuestion.is_picked && !selectedQuestion.is_correct">(Xato)</span>
                     <span class="text-destructive" v-if="!selectedQuestion.is_picked">(Belgilanmagan)</span>
                  </div>
                  <ul class="flex flex-col gap-2">
                     <li
                        class="text-sm border rounded flex items-start gap-1 p-3"
                        v-for="(answer, aIndex) in selectedQuestion.answers"
                        :key="aIndex"
                        :class="{
                           'border-green-500 text-green-500': selectedQuestion.is_correct && selectedQuestion.is_picked && selectedQuestion.answer === aIndex + 1,
                           'text-destructive border-destructive': !selectedQuestion.is_correct && selectedQuestion.is_picked && selectedQuestion.answer === aIndex + 1
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
                     v-for="(question, index) in item.questions"
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
         </div>
      </div>
   </div>
</template>
