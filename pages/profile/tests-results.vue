<script setup>
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTestStore } from '~/stores/test';

definePageMeta({ layout: 'cabinet' });

const testStore = useTestStore();

const router = useRouter();

const goToLink = (test_id, test_type) => {
   const routes = {
      [test.TYPE_DTM]: '/results/dtm-test',
      [test.TYPE_BLOG]: '/results/blog-test',
      [test.TYPE_SCHOOL]: '/results/school-test',
      [test.TYPE_RESEARCH]: '/results/research-test'
   };

   const path = routes[test_type];

   if (path) {
      router.push({
         path,
         query: {
            test_id,
            test_type
         }
      });
   }
};

testStore.getTestResults();
</script>

<template>
   <div>
      <h4 class="text-base sm:text-xl font-semibold tracking-tight mb-4">Mening urunishlarim</h4>
      <div class="border rounded-md">
         <Table class="font-medium whitespace-nowrap">
            <TableHeader>
               <TableRow class="font-medium whitespace-nowrap">
                  <TableHead class="h-12 px-4 text-center"> # </TableHead>
                  <TableHead class="h-12 px-4 text-center">Sana va vaqt</TableHead>
                  <TableHead class="h-12 px-4 text-center">Test turi</TableHead>
                  <TableHead class="h-12 px-4 text-center"> To'plangan ball </TableHead>
                  <TableHead class="h-12 px-4 text-center"> Ko'rish </TableHead>
               </TableRow>
            </TableHeader>
            <TableBody class="text-center">
               <TableRow v-for="(item, i) in testStore.testResults" :key="i" class="first:bg-muted first:text-foreground first:hover:bg-muted">
                  <TableCell class="p-4 font-medium">
                     <span>{{ i + 1 }}</span>
                  </TableCell>
                  <TableCell> {{ dayjs(item.started).format('DD.MM.YYYY') }} {{ dayjs(item.started).format('HH:mm') }} - {{ dayjs(item.finished).format('HH:mm') }}</TableCell>
                  <TableCell class="p-4">
                     <span>{{ item.type }}</span>
                  </TableCell>
                  <TableCell class="p-4">
                     <span>{{ item.total_ball }}</span>
                  </TableCell>
                  <TableCell class="p-4 flex justify-center">
                     <svg
                        @click="goToLink(item.id, item.type)"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-eye w-4 h-4 cursor-pointer"
                     >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                     </svg>
                  </TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </div>
   </div>
</template>
