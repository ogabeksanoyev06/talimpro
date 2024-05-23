<script setup>
import { ref, onMounted, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationEllipsis, PaginationList, PaginationListItem } from '@/components/ui/pagination';
import { useCommonStore } from '@/stores/common';
import AppLoading from '~/components/shared/AppLoading.vue';

definePageMeta({ middleware: 'auth' });

const route = useRoute();

const commonStore = useCommonStore();
const { universitiesDtmId, regions, universities, loading } = storeToRefs(commonStore);

const limits = [
   {
      number: 10,
      value: 10
   },
   {
      number: 25,
      value: 25
   },
   {
      number: 50,
      value: 50
   },
   {
      number: 100,
      value: 100
   },
   {
      number: 200,
      value: 200
   }
];
const educationType = [
   {
      value: 'kunduzgi',
      name: 'Kunduzgi'
   },
   {
      value: 'sirtqi',
      name: 'Sirtqi'
   },
   {
      value: 'kechki',
      name: 'Kechki'
   },
   {
      value: 'remote',
      name: 'Masofaviy'
   }
];
const educationLanguage = [
   {
      value: 'O`zbek',
      name: 'O`zbek'
   },
   {
      value: 'Rus',
      name: 'Rus'
   },
   {
      value: 'Qoraqalpoq',
      name: 'Qoraqalpoq'
   },
   {
      value: 'Ingliz',
      name: 'Ingliz'
   },
   {
      value: 'Tojik',
      name: 'Tojik'
   },
   {
      value: 'Qozoq',
      name: 'Qozoq'
   },
   {
      value: 'Turkman',
      name: 'Turkman'
   },
   {
      value: 'Koreys',
      name: 'Koreys'
   },
   {
      value: 'Nemis',
      name: 'Nemis'
   },
   {
      value: 'Frantsuz',
      name: 'Frantsuz'
   }
];

const regionId = ref();
const universityId = ref();
const selectedEducationType = ref('kunduzgi');
const selectedEducationLang = ref('O`zbek');
const offset = ref(1);
const limit = ref(10);

const selectOffsetValue = (index) => {
   offset.value = index;
};

const fetchUniversities = async () => {
   await commonStore.getUniversitiesDtmId(route.query.dtmTestId, {
      limit: limit.value,
      offset: offset.value,
      form_of_education: selectedEducationType.value,
      edu_lang: selectedEducationLang.value,
      university__region: regionId.value,
      university: universityId.value
   });
};

watch([limit, offset, selectedEducationType, selectedEducationType, regionId, universityId], async () => {
   if (route.query.dtmTestId) {
      await fetchUniversities();
   }
});

watch(regionId, async (newValue) => {
   await commonStore.getUniversities({ region: newValue });
});

onMounted(async () => {
   await fetchUniversities();
   commonStore.getRegions();
});
</script>

<template>
   <div class="py-8">
      <AppLoading v-if="loading" />
      <div class="container">
         <div class="flex flex-col justify-center items-center space-y-4 mb-4">
            <div class="border border-green-500 max-w-[200px] w-full rounded-full text-center" style="font-size: xx-large">
               <span>{{ universitiesDtmId?.total_ball }}</span>
               <span style="font-size: medium">/189</span>
            </div>
            <p class="text-base sm:text-lg font-bold text-center">
               O'tgan yilgi turdosh yo'nalishlar bo'yicha o'tish ballari va siz to'plagan ballga nisbatatan solishtirish natijasi
            </p>
            <div class="flex flex-wrap gap-4">
               <Button variant="outline" class="border-green-500">Grand: {{ universitiesDtmId?.grands_count }}</Button>
               <Button variant="outline" class="border-yellow-500">Kontrakt: {{ universitiesDtmId?.contracts_count }}</Button>
            </div>
         </div>
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
            <div class="mr-auto">
               <div class="flex flex-col space-y-2">
                  <Label for="terms">Soni</Label>
                  <Select id="terms" v-model="limit">
                     <SelectTrigger>
                        <SelectValue placeholder="Soni" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectItem v-for="item in limits" :key="item.value" :value="item.value">
                              {{ item.number }}
                           </SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
            </div>
            <!-- <div class="sm:ml-auto">
               <div class="flex flex-col space-y-2">
                  <Label for="search">Qidirish</Label>
                  <Input id="search" type="text" placeholder="" v-model="search" />
               </div>
            </div> -->
         </div>
         <Table class="mb-4">
            <TableHeader class="text-start">
               <TableRow>
                  <TableHead class="h-12 px-4 cursor-pointer">
                     <div class="flex items-center">
                        Viloyat
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                        >
                           <path d="m7 15 5 5 5-5" />
                           <path d="m7 9 5-5 5 5" />
                        </svg>
                     </div>
                  </TableHead>
                  <TableHead class="h-12 px-4 cursor-pointer">
                     <div class="flex items-center">
                        Universitet
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                        >
                           <path d="m7 15 5 5 5-5" />
                           <path d="m7 9 5-5 5 5" />
                        </svg>
                     </div>
                  </TableHead>
                  <TableHead class="h-12 px-4 cursor-pointer">
                     <div class="flex items-center">
                        Yo'nalish
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                        >
                           <path d="m7 15 5 5 5-5" />
                           <path d="m7 9 5-5 5 5" />
                        </svg>
                     </div>
                  </TableHead>
                  <TableHead class="h-12 px-4 cursor-pointer">
                     <div class="flex items-center">
                        Ta'lim shakli
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                        >
                           <path d="m7 15 5 5 5-5" />
                           <path d="m7 9 5-5 5 5" />
                        </svg>
                     </div>
                  </TableHead>
                  <TableHead class="h-12 px-4 cursor-pointer">
                     <div class="flex items-center">
                        Grand
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                        >
                           <path d="m7 15 5 5 5-5" />
                           <path d="m7 9 5-5 5 5" />
                        </svg>
                     </div>
                  </TableHead>
                  <TableHead class="h-12 px-4 cursor-pointer">
                     <div class="flex items-center">
                        Kontrakt
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                        >
                           <path d="m7 15 5 5 5-5" />
                           <path d="m7 9 5-5 5 5" />
                        </svg>
                     </div>
                  </TableHead>
                  <TableHead class="h-12 px-4 cursor-pointer">
                     <div class="flex items-center">
                        Status
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           stroke-linecap="round"
                           stroke-linejoin="round"
                           class="lucide lucide-chevrons-up-down ml-2 w-4 h-4"
                        >
                           <path d="m7 15 5 5 5-5" />
                           <path d="m7 9 5-5 5 5" />
                        </svg>
                     </div>
                  </TableHead>
               </TableRow>
            </TableHeader>
            <TableBody class="text-start">
               <TableRow v-for="item in universitiesDtmId?.universities?.results" :key="item.id">
                  <TableCell class="p-4"> {{ item.university_region }}</TableCell>
                  <TableCell class="p-4"> {{ item.university_name }}</TableCell>
                  <TableCell class="p-4"> {{ item.name }}</TableCell>
                  <TableCell class="p-4"> {{ item.form_of_education }}</TableCell>
                  <TableCell class="p-4"> {{ item.grant_ball }}</TableCell>
                  <TableCell class="p-4"> {{ item.contract_ball }}</TableCell>
                  <TableCell class="p-4">
                     <span class="text-green-500" v-if="item.status === 'grant'">Grant</span>
                     <span class="text-orange-500" v-else-if="item.status === 'contract'">Kontrakt</span>
                     <span class="text-destructive" v-else>Yiqildi</span>
                  </TableCell>
               </TableRow>
            </TableBody>
         </Table>
         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
               <div class="flex flex-col space-y-2">
                  <Label for="region">Viloyat</Label>
                  <Select id="region" v-model="regionId">
                     <SelectTrigger>
                        <SelectValue placeholder="Viloyat" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectItem v-for="item in regions" :key="item.id" :value="item.id">
                              {{ item.name }}
                           </SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
            </div>
            <div>
               <div class="flex flex-col space-y-2">
                  <Label for="universityId">Universitet</Label>
                  <Select id="universityId" v-model="universityId" :disabled="!regionId">
                     <SelectTrigger>
                        <SelectValue placeholder="Universitet" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectItem v-for="item in universities" :key="item.id" :value="item.id">
                              {{ item.name }}
                           </SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
            </div>
            <div>
               <div class="flex flex-col space-y-2">
                  <Label for="terms">Ta'lim shakli</Label>
                  <Select id="terms" v-model="selectedEducationType">
                     <SelectTrigger>
                        <SelectValue placeholder="Ta'lim shakli" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectItem v-for="item in educationType" :key="item.value" :value="item.value">
                              {{ item.name }}
                           </SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
            </div>
            <div>
               <div class="flex flex-col space-y-2">
                  <Label for="lang">Til</Label>
                  <Select id="lang" v-model="selectedEducationLang">
                     <SelectTrigger>
                        <SelectValue placeholder="Til" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectItem v-for="item in educationLanguage" :key="item.value" :value="item.value">
                              {{ item.name }}
                           </SelectItem>
                        </SelectGroup>
                     </SelectContent>
                  </Select>
               </div>
            </div>
         </div>
         <div class="flex justify-end mt-4">
            <Pagination v-slot="{ page }" :total="universitiesDtmId?.universities_total_count" :sibling-count="1" show-edges :default-page="1">
               <PaginationList v-slot="{ items }" class="flex items-center gap-1">
                  <template v-for="(item, index) in items">
                     <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                        <Button class="w-9 h-9 p-0" :variant="item.value === page ? 'default' : 'outline'" @click="selectOffsetValue(item.value)">
                           {{ item.value }}
                        </Button>
                     </PaginationListItem>
                     <PaginationEllipsis v-else :key="item.type" :index="index" />
                  </template>
               </PaginationList>
            </Pagination>
         </div>
      </div>
   </div>
</template>
