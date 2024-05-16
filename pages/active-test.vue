<script setup>
import { ref, onMounted } from 'vue';

// definePageMeta({
//    middleware: ['auth']
// });

const selectedQuestion = ref({});

const testActiveNumber = useCookie('testActiveNumber', { default: () => 0 });

const { tests, testTimer, testFinish, timerFormat, setTimer, selectAnswer, getActiveTest, getTestLiveTime } = useActiveTest();

const answerLabels = ref(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

const getActivetestActiveNumber = (number) => {
   if (number !== testActiveNumber.value) {
      testActiveNumber.value = number;
      selectedQuestions();
   }
};

const prev = () => {
   const prevNumber = testActiveNumber.value - 1;
   if (prevNumber >= 0) {
      getActivetestActiveNumber(prevNumber);
   }
};

const next = () => {
   const nextNumber = testActiveNumber.value + 1;
   if (nextNumber <= tests?.value.questions.length - 1) {
      getActivetestActiveNumber(nextNumber);
   }
};

const selectedQuestions = () => {
   selectedQuestion.value = tests.value?.questions[testActiveNumber.value];
};

onMounted(async () => {
   await getActiveTest();
   await getTestLiveTime();
   selectedQuestions();
   setTimer();
});

onBeforeUnmount(() => {
   testActiveNumber.value = 0;
});
</script>
<template>
   <div class="mt-4">
      <div class="container">
         <div class="flex flex-col gap-y-8">
            <div class="flex items-center md:justify-between flex-col md:flex-row gap-3 border-b border-t rounded-lg border-gray-400 py-2 px-4">
               <h3 class="text-xl font-semibold" v-if="tests.type === 'dtm'">
                  {{ selectedQuestion ? selectedQuestion.science : '' }}
               </h3>
               <h3 class="text-xl font-semibold">{{ tests.subjectName }}</h3>
               <div class="max-w-[200px] w-full border border-green-500 text-center">
                  <span class="text-green-500" style="font-variant-numeric: tabular-nums; font-size: xx-large"> {{ timerFormat(testTimer) }}</span>
               </div>
            </div>
            <div class="border-b border-t rounded-lg border-gray-400 py-4">
               <div class="text-base font-medium px-4">
                  <span style="font-size: 1.1rem">{{ testActiveNumber + 1 }}. </span>
                  <span v-html="selectedQuestion?.question"></span>
               </div>
               <div class="w-full h-px bg-border my-6"></div>
               <ul class="flex flex-col">
                  <li
                     v-for="(answer, aIndex) in selectedQuestion?.answers"
                     :key="aIndex"
                     class="text-sm relative cursor-pointer flex items-start gap-1 p-3 after:absolute after:top-0 after:left-0 after:h-full after:w-1 after:bg-blue-500/45 after:rounded-tr-sm after:rounded-br-sm after:opacity-0 before:absolute before:top-0 before:right-0 before:h-full before:w-1 before:bg-blue-500/45 before:rounded-tl-sm before:rounded-bl-sm before:opacity-0 hover:after:opacity-100 hover:before:opacity-100 transition-all duration-300 group"
                     @click="selectAnswer(selectedQuestion.id, aIndex + 1, selectedQuestion.dtmtest_blog)"
                     :class="selectedQuestion.answer === aIndex + 1 ? '!bg-blue-500/5 after:opacity-100 before:op ' : ''"
                  >
                     <span class="text-[1rem] font-bold pl-2 sm:pl-4"> {{ answerLabels[aIndex] + ')' }}</span>
                     <span v-html="answer"> </span>
                  </li>
               </ul>
            </div>
            <div class="border-b border-t rounded-lg border-gray-400 py-4 px-4 mb-8">
               <div class="flex flex-wrap gap-1">
                  <Button
                     v-for="(item, index) in tests?.questions"
                     :key="item.id"
                     :variant="index === testActiveNumber ? 'default' : item.isPicked ? 'secondary' : 'outline'"
                     @click="getActivetestActiveNumber(index)"
                     class="h-8 w-[40px]"
                  >
                     {{ index + 1 }}
                  </Button>
               </div>
               <div class="w-full h-px bg-border my-6"></div>
               <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div class="md:col-span-6 flex gap-5 justify-center md:justify-start">
                     <Button @click="prev">Oldingi</Button>
                     <Button @click="next">Keyingi</Button>
                  </div>
                  <div class="md:col-span-6 flex justify-center md:justify-end">
                     <Button variant="destructive" @click="testFinish">Yakunlash</Button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.shadow-test {
   box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
</style>
