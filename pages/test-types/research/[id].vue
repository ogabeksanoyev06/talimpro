<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import Button from '~/components/ui/button/Button.vue';
import { useTestStore } from '~/stores/test';

definePageMeta({
   middleware: ['auth']
});

const route = useRoute();

const testStore = useTestStore();
const { researches, loading } = storeToRefs(testStore);

const research_id = ref('');

const selected_specification = ref(null);

const questionsCount = ref(5);

const questionsCountSelect = ref([
   {
      id: 5,
      name: 5
   },
   {
      id: 10,
      name: 10
   },
   {
      id: 15,
      name: 15
   },
   {
      id: 20,
      name: 20
   },
   {
      id: 25,
      name: 25
   },
   {
      id: 30,
      name: 30
   }
]);

function selectedSpecification(item) {
   selected_specification.value = item.id;
}

function startTest() {
   const paramtersModel = {
      test_type_id: research_id.value,
      specification_id: selected_specification.value,
      question_count: questionsCount.value
   };
   testStore.startResearchesTest(paramtersModel);
}

research_id.value = route.params.id;
testStore.getResearchById(route.params.id);
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="flex flex-col justify-center sm:justify-start space-y-3">
            <h1 class="text-center sm:text-left text-2xl font-bold sm:text-3xl">
               {{ researches?.title }}
            </h1>
            <p class="text-center sm:text-left text-sm text-muted-foreground sm:text-base max-w-[900px]">
               {{ researches?.short_description }}
            </p>
         </div>
         <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <Select v-model="questionsCount">
               <SelectTrigger>
                  <SelectValue placeholder="Savollar sonini tanlang" />
               </SelectTrigger>
               <SelectContent>
                  <SelectGroup>
                     <SelectLabel>Savollar sonini tanlang</SelectLabel>
                     <SelectItem v-for="item in questionsCountSelect" :key="item.id" :value="item.id">
                        {{ item.name }}
                     </SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </div>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div
               class="rounded-xl border border-border bg-card text-card-foreground shadow cursor-pointer min-h-[130px] hover:shadow-none transition-all duration-300 bg-[url('https://www.fozilov.uz/assets/Light.png')] bg-[length:200px_200px]"
               v-for="item in researches?.specifications"
               :key="item.id"
               @click="selectedSpecification(item)"
               :class="{ 'border-primary': selected_specification === item.id }"
            >
               <div class="flex flex-col justify-between h-full space-y-1 p-6">
                  <h3 class="text-base font-semibold leading-none tracking-tight">{{ item.name }}</h3>
                  <div class="flex flex-col gap-y-1">
                     <p class="text-sm text-muted-foreground">Umumiy vaqt: <span class="font-semibold">40 daqiqa</span></p>
                     <p class="text-sm text-muted-foreground">
                        Ball: <span class="font-semibold">{{ item.ball }} ball</span>
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <div class="flex justify-center mt-6">
            <Button @click="startTest" :disabled="!selected_specification || !questionsCount || loading">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  font-size="48"
                  class="animate-spin iconify iconify--ph w-5 h-5 mr-2"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                  v-if="loading"
               >
                  <path
                     fill="currentColor"
                     d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                  ></path>
               </svg>
               Testni boshlash
            </Button>
         </div>
      </div>
   </div>
</template>

<style lang="scss" scoped></style>
