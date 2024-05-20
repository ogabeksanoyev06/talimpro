<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { Button } from '@/components/ui/button';
import Label from '~/components/ui/label/Label.vue';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTestStore } from '~/stores/test';

definePageMeta({
   middleware: ['auth']
});

const testStore = useTestStore();
const activeTestStore = useActiveTestStore();

const { classes, schoolTestSciences, loading } = storeToRefs(testStore);
const { hasActiveTest } = storeToRefs(activeTestStore);

const questionsCount = ref(5);

const selectedClass = ref(1);

const selectedLevel = ref('beginner');

const activeScience = ref(null);

const educationLang = ref('oʻzbek');

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

const questionLevelList = ref([
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
]);

const languageOptions = ref([
   { id: 'oʻzbek', name: 'Oʻzbek tili' },
   { id: 'qoraqalpoq', name: 'Qoraqalpoq tili' },
   { id: 'qozoq', name: 'Qozoq tili' },
   { id: 'tojik', name: 'Tojik tili' },
   { id: 'qirgiz', name: 'Qirgʻiz tili' },
   { id: 'russian', name: 'Rus tili' },
   { id: 'turkman', name: 'Turk tili' }
]);

function selectedScience(id) {
   activeScience.value = id;
}

async function setSchoolClassId() {
   await testStore.getClasses();
   if (classes.length > 0 && classes[0].id) {
      selectedClass.value = classes[0].id;
   }
}

function startTest() {
   if (hasActiveTest.value) {
      navigateTo('/active-test');
   } else {
      const paramtersModel = {
         science_id: activeScience.value,
         class_id: selectedClass.value,
         test_score: selectedLevel.value,
         test_count: questionsCount.value
      };
      testStore.startSchoolTest(paramtersModel);
   }
}

const isTestDisabled = computed(() => !activeScience.value || !selectedClass.value || !selectedLevel.value || !questionsCount.value);

watch([selectedClass, educationLang], async () => {
   await testStore.getSchoolTestSciences({ school_class: selectedClass.value, education_lang: educationLang.value });
});

onMounted(async () => {
   await setSchoolClassId();
   await testStore.getSchoolTestSciences({ school_class: selectedClass.value, education_lang: educationLang.value });
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div class="flex flex-col space-y-1">
               <Label class="text-sm">Ta'lim tili</Label>
               <Select v-model="educationLang">
                  <SelectTrigger>
                     <SelectValue placeholder="Ta'lim tilini tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Ta'lim tilini tanlang</SelectLabel>
                        <SelectItem v-for="item in languageOptions" :key="item.id" :value="item.id">
                           {{ item.name }}
                        </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="flex flex-col space-y-1">
               <Label class="text-sm">Sinf</Label>
               <Select v-model="selectedClass">
                  <SelectTrigger>
                     <SelectValue placeholder="Sinfni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Sinfni tanlang</SelectLabel>
                        <SelectItem v-for="item in classes" :key="item.id" :value="item.id">
                           {{ item.number }}
                        </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="flex flex-col space-y-1">
               <Label class="text-sm">Savollar soni</Label>
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
            <div class="flex flex-col space-y-1">
               <Label class="text-sm">Daraja</Label>
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
         <div class="flex flex-wrap gap-3 border-b border-border pb-8">
            <Button v-for="item in schoolTestSciences.results" :key="item.id" @click="selectedScience(item.id)" :variant="item.id === activeScience ? '' : 'outline'">
               {{ item.name }}
            </Button>
         </div>

         <div class="flex justify-center mt-12">
            <Button :disabled="isTestDisabled || loading" @click="startTest">
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
