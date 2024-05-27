<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTestStore } from '~/stores/test';

definePageMeta({
   middleware: ['auth']
});

const testStore = useTestStore();
const activeTestStore = useActiveTestStore();

const { blogTestSubjects, loading } = storeToRefs(testStore);
const { hasActiveTest } = storeToRefs(activeTestStore);

const questionsCount = ref(5);

const selectedLevel = ref('beginner');

const scienceId = ref(null);

const subjectList = ref([]);

const questionsCountSelect = [
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
];

const questionLevelList = [
   {
      id: 'beginner',
      name: 'Oson',
      disabled: false
   },
   {
      id: 'medium',
      name: "O'rta",
      disabled: true
   },
   {
      id: 'advanced',
      name: 'Qiyin',
      disabled: true
   }
];

function selectedScience(id) {
   scienceId.value = id;
   subjectList.value = [];
   testStore.getBlogTestSubjects({ science_id: id });
}

function handleChange(id) {
   if (!subjectList.value.includes(id)) {
      subjectList.value.push(id);
   } else {
      subjectList.value = subjectList.value.filter((item) => item !== id);
   }
}

async function startTest() {
   if (hasActiveTest.value) {
      navigateTo('/active-test');
   } else {
      const paramtersModel = {
         subject_list: subjectList.value,
         science_id: scienceId.value,
         test_score: selectedLevel.value,
         test_count: questionsCount.value
      };
      testStore.startBlogTest(paramtersModel);
   }
}

onMounted(async () => {
   await testStore.getBlogTestSciences();
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div>
            <h4 class="text-xl font-semibold mb-4">Fanni tanlang</h4>
            <div class="flex flex-wrap gap-2 border-b border-border pb-8">
               <Button v-for="item in testStore.blogTestSciences" :key="item.id" :variant="item.id === scienceId ? '' : 'outline'" @click="selectedScience(item.id)">
                  {{ item.name }}
               </Button>
            </div>
         </div>
         <div class="mt-6" v-if="scienceId">
            <h4 class="text-xl font-semibold mb-4">Mavzuni tanlang</h4>
            <div class="flex flex-col space-y-2">
               <div class="flex items-center space-x-4" v-for="item in blogTestSubjects" :key="item.id">
                  <Checkbox :id="item.id" :checked="subjectList.includes(item.id)" @update:checked="handleChange(item.id)" />
                  <label
                     :for="item.id"
                     class="text-sm cursor-pointer font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                     v-html="parseQuestion(item.name)"
                  >
                  </label>
               </div>
            </div>
         </div>
         <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div>
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
            <div>
               <Select v-model="selectedLevel">
                  <SelectTrigger>
                     <SelectValue placeholder="Darajani tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Darajani tanlang</SelectLabel>
                        <SelectItem v-for="item in questionLevelList" :key="item.id" :value="item.id" :disabled="item.disabled">
                           {{ item.name }}
                        </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </div>
         <div class="flex justify-center mt-6">
            <Button @click="startTest" :disabled="(!scienceId && !subjectList.length > 0 && !selectedLevel && !questionsCount) || loading">
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
                  v-if="testStore.loading"
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
