<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import { Button } from '@/components/ui/button';
import Label from '~/components/ui/label/Label.vue';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTestStore } from '~/stores/test';
import { useCommonStore } from '~/stores/common';

const testStore = useTestStore();
const commonStore = useCommonStore();

const { dtmTestBlogsMainSubjects, dtmTestBlogsMandatorySubjects, loading } = storeToRefs(testStore);
const { regions, universities, directions } = storeToRefs(commonStore);

// common
commonStore.getRegions();

const testLanguage = ref([{ id: 0, name: 'O`zbek' }]);

const educationType = [
   {
      id: 'kunduzgi',
      name: 'Kunduzgi',
      disabled: false
   },
   {
      id: 'sirtqi',
      name: 'Sirtqi',
      disabled: false
   },
   {
      id: 'kechki',
      name: 'Kechki',
      disabled: false
   },
   {
      id: 'masofaviy',
      name: 'Masofaviy',
      disabled: true
   }
];

const regionId = ref('');
const selectedUniversity = ref('');
const selectedTestLanguage = ref(0);
const selectedEducationType = ref('kunduzgi');
const selectedDirection = ref('');

const isSelectedUniversityNotEmpty = computed(() => {
   return selectedUniversity.value !== '';
});

function startTest() {
   const paramtersModel = {
      blog_ids: testStore.dtmTestBlogs.map((blog) => blog.id)
   };
   testStore.startDtmTest(paramtersModel);
}

const totalCompulsoryBall = computed(() => {
   return dtmTestBlogsMandatorySubjects.value?.reduce((total, subject) => total + subject.ball * subject.question_count, 0);
});

const totalBasicBall = computed(() => {
   return dtmTestBlogsMainSubjects.value?.reduce((total, subject) => total + subject.ball * subject.question_count, 0);
});

watch(regionId, async (newValue) => {
   selectedUniversity.value = '';
   await commonStore.getUniversities({ region: newValue });
});

watch([selectedUniversity, selectedEducationType], async (newValue) => {
   selectedDirection.value = '';
   await commonStore.getUniversityDirection({ university: selectedUniversity.value, form_of_education: selectedEducationType.value, edu_lang: 'O`zbek' });
});

watch(selectedDirection, async (newValue) => {
   await testStore.getDtmTestBlogs({ educ_direction: selectedDirection.value });
});
</script>

<template>
   <div class="py-8">
      <div class="container">
         <div class="grid grid-cols-12 gap-6 justify-center">
            <div class="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-1">
               <Label class="text-sm">Viloyat</Label>
               <Select v-model="regionId">
                  <SelectTrigger>
                     <SelectValue placeholder="Viloyatni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Tanlang</SelectLabel>
                        <SelectItem v-for="region in regions" :key="region.id" :value="region.id"> {{ region.name }} </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-1">
               <Label class="text-sm">Universitet</Label>
               <Select v-model="selectedUniversity" :disabled="regionId === ''">
                  <SelectTrigger>
                     <SelectValue placeholder="Universitetni tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Tanlang</SelectLabel>
                        <SelectItem v-for="item in universities" :key="item.id" :value="item.id"> {{ item.name }} </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-1">
               <Label class="text-sm">Test tili</Label>
               <Select v-model="selectedTestLanguage" :disabled="!isSelectedUniversityNotEmpty">
                  <SelectTrigger>
                     <SelectValue placeholder="Test tilini tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Tanlang</SelectLabel>
                        <SelectItem v-for="item in testLanguage" :key="item.id" :value="item.id"> {{ item.name }} </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col space-y-1">
               <Label class="text-sm">Ta'lim shakli</Label>
               <Select v-model="selectedEducationType" :disabled="!isSelectedUniversityNotEmpty">
                  <SelectTrigger>
                     <SelectValue placeholder="Ta'lim shaklini tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Tanlang</SelectLabel>
                        <SelectItem v-for="item in educationType" :key="item.id" :value="item.id" :disabled="item.disabled"> {{ item.name }} </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
            <div class="col-span-12 md:col-span-6 lg:col-span-9 flex flex-col space-y-1">
               <Label class="text-sm">Yo'nalish</Label>
               <Select v-model="selectedDirection" :disabled="!isSelectedUniversityNotEmpty">
                  <SelectTrigger>
                     <SelectValue placeholder="Ta'lim yo'nalishini tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        <SelectLabel>Tanlang</SelectLabel>
                        <SelectItem v-for="direction in directions" :key="direction.id" :value="direction.id">
                           {{ direction.name }}
                        </SelectItem>
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </div>
         <div class="mt-6">
            <Table
               class="font-medium whitespace-nowrap"
               v-if="testStore.dtmTestBlogs.length && selectedDirection && testStore.dtmTestBlogsMainSubjects.length && testStore.dtmTestBlogsMandatorySubjects.length"
            >
               <TableHeader>
                  <TableRow>
                     <TableHead class="h-12 px-4 text-center"> # </TableHead>
                     <TableHead class="h-12 px-4 text-center">Majburiy fanlar</TableHead>
                     <TableHead class="h-12 px-4 text-center">Testlar soni</TableHead>
                     <TableHead class="h-12 px-4 text-center"> Ball</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody class="text-center">
                  <TableRow v-for="(item, i) in testStore.dtmTestBlogsMandatorySubjects" :key="i">
                     <TableCell class="p-4 font-medium"> {{ i + 1 }} </TableCell>
                     <TableCell class="p-4 font-medium"> {{ item.science }} (majburiy) </TableCell>
                     <TableCell class="p-4 font-medium"> {{ item.question_count }} </TableCell>
                     <TableCell class="p-4 font-medium"> {{ item.ball }} </TableCell>
                  </TableRow>
                  <TableRow class="!border-b bg-muted">
                     <TableCell colSpan="2" class="p-4 font-bold"> Umumiy ball </TableCell>
                     <TableCell colSpan="2" class="p-4 font-bold"> {{ totalCompulsoryBall }} </TableCell>
                  </TableRow>
               </TableBody>
               <TableHeader>
                  <TableRow>
                     <TableHead class="h-12 px-4 text-center"> # </TableHead>
                     <TableHead class="h-12 px-4 text-center">Asosiy fanlar</TableHead>
                     <TableHead class="h-12 px-4 text-center">Testlar soni</TableHead>
                     <TableHead class="h-12 px-4 text-center"> Ball</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody class="text-center">
                  <TableRow v-for="(item, i) in testStore.dtmTestBlogsMainSubjects" :key="i">
                     <TableCell class="p-4 font-medium"> {{ i + 1 }} </TableCell>
                     <TableCell class="p-4 font-medium"> {{ item.science }} </TableCell>
                     <TableCell class="p-4 font-medium"> {{ item.question_count }} </TableCell>
                     <TableCell class="p-4 font-medium"> {{ item.ball }} </TableCell>
                  </TableRow>
                  <TableRow class="!border-b border-card-foreground bg-muted">
                     <TableCell colSpan="2" class="p-4 font-bold"> Umumiy ball </TableCell>
                     <TableCell colSpan="2" class="p-4 font-bold"> {{ totalBasicBall }} </TableCell>
                  </TableRow>
                  <TableRow class="!border-b border-card-foreground">
                     <TableCell colSpan="2" class="p-4 font-bold"> 5ta fan bo'yicha umumiy ball </TableCell>
                     <TableCell colSpan="2" class="p-4 font-bold"> {{ totalBasicBall + totalCompulsoryBall }} </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
            <div
               class="relative w-full rounded-lg border px-4 py-4 text-sm bg-background text-center font-semibold text-foreground"
               v-if="!testStore.dtmTestBlogs.length && selectedDirection && !testStore.dtmTestBlogsMainSubjects.length && !testStore.dtmTestBlogsMandatorySubjects.length"
            >
               Tanlangan yo'nalish bo'yicha testlar mavjud emas
            </div>
         </div>

         <div class="flex justify-center mt-6">
            <Button @click="startTest" :disabled="!selectedDirection || testStore.loading">
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
