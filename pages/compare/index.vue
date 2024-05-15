<script setup>
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationEllipsis, PaginationList, PaginationListItem } from '@/components/ui/pagination';
import { useCommonStore } from '@/stores/common';

const route = useRoute();
const commonStore = useCommonStore();

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
      value: 'daytime',
      name: 'Kunduzgi'
   },
   {
      value: 'sirtqi',
      name: 'Sirtqi'
   },
   {
      value: 'evening',
      name: 'Kechki'
   },
   {
      value: 'remote',
      name: 'Masofaviy'
   }
];

const search = ref('');
const regionId = ref();
const universityId = ref();
const selectedEducationType = ref('daytime');
const offset = ref(1);
const limit = ref(10);

commonStore.getRegions();
commonStore.getUniversities();

await commonStore.getUniversitiesDtmId(route.query.dtmTestId, {
   limit: limit.value,
   offset: offset.value
});

const selectOffsetValue = (index) => {
   offset.value = index;
};

watch(regionId, async (newRegionId) => {
   if (newRegionId) {
      await commonStore.getDistricts(newRegionId);
   }
});

watch(universityId, async (newUniversityId) => {
   if (newUniversityId) {
      await commonStore.getUniversitiesDtmId(newUniversityId, {
         limit: limit.value,
         offset: offset.value,
         education_type: selectedEducationType.value,
         search: search.value
      });
   }
});

watch([limit, offset, selectedEducationType, search], async () => {
   if (universityId.value) {
      await commonStore.getUniversitiesDtmId(universityId.value, {
         limit: limit.value,
         offset: offset.value,
         education_type: selectedEducationType.value,
         search: search.value
      });
   }
});
</script>

<template>
   <div class="py-6">
      <div class="container">
         <div class="flex flex-col justify-center items-center space-y-4 mb-4">
            <div class="border border-green-500 max-w-[200px] w-full rounded-full text-center" style="font-size: x-large">
               <span>{{ commonStore.universitiesDtmId?.total_ball }}</span>
               <span style="font-size: medium">/189</span>
            </div>
            <p class="text-base sm:text-lg font-bold text-center">
               O'tgan yilgi turdosh yo'nalishlar bo'yicha o'tish ballari va siz to'plagan ballga nisbatatan solishtirish natijasi
            </p>
            <div class="flex flex-wrap gap-4">
               <Button variant="outline" class="">Hammasi</Button>
               <Button variant="outline" class="border-green-500">Grand: 0</Button>
               <Button variant="outline" class="border-yellow-500">Kontrakt: 201</Button>
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
            <div class="sm:ml-auto">
               <div class="flex flex-col space-y-2">
                  <Label for="search">Qidirish</Label>
                  <Input id="search" type="text" placeholder="" v-model="search" />
               </div>
            </div>
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
               <TableRow v-for="item in commonStore.universitiesDtmId?.universities.results" :key="item.id">
                  <TableCell class="p-4"> {{ item.university_region }}</TableCell>
                  <TableCell class="p-4"> {{ item.university_name }}</TableCell>
                  <TableCell class="p-4"> {{ item.name }}</TableCell>
                  <TableCell class="p-4"> {{ item.form_of_education }}</TableCell>
                  <TableCell class="p-4"> {{ item.grant_ball }}</TableCell>
                  <TableCell class="p-4"> {{ item.contract_ball }}</TableCell>
                  <TableCell class="p-4">
                     <span class="text-destructive" v-if="item.status === 'inactive'">Yiqildi</span>
                     <span class="text-green-500" v-else>Grant</span>
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
                           <SelectItem v-for="item in commonStore.regions" :key="item.id" :value="item.id">
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
                  <Select id="universityId" v-model="universityId">
                     <SelectTrigger>
                        <SelectValue placeholder="Universitet" />
                     </SelectTrigger>
                     <SelectContent>
                        <SelectGroup>
                           <SelectItem v-for="item in commonStore.universities" :key="item.id" :value="item.id">
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
         </div>
         <div class="flex justify-end mt-4">
            <Pagination v-slot="{ page }" :total="commonStore.universitiesDtmId?.universities_total_count" :sibling-count="1" show-edges :default-page="1">
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