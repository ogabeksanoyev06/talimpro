<script setup>
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useTestStore } from '~/stores/test';

definePageMeta({ layout: 'cabinet', middleware: 'auth' });

const testStore = useTestStore();
const { testResults, loading } = storeToRefs(testStore);

const router = useRouter();

const goToLink = (test_id, test_type) => {
   const routes = {
      [testType.TYPE_DTM]: '/results/dtm-test',
      [testType.TYPE_BLOG]: '/results/blog-test',
      [testType.TYPE_SCHOOL]: '/results/school-test',
      [testType.TYPE_RESEARCH]: '/results/research-test'
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

await testStore.getTestResults();
</script>

<template>
   <div>
      <h4 class="text-base sm:text-xl font-semibold tracking-tight mb-4">Mening urunishlarim</h4>
      <div class="rounded-md">
         <Table class="font-medium whitespace-nowrap">
            <TableHeader>
               <TableRow class="text-base">
                  <TableHead class="h-12 px-4 text-center font-bold text-foreground"> # </TableHead>
                  <TableHead class="h-12 px-4 text-center font-bold text-foreground">Sana va vaqt</TableHead>
                  <TableHead class="h-12 px-4 text-center font-bold text-foreground">Test turi</TableHead>
                  <TableHead class="h-12 px-4 text-center font-bold text-foreground"> To'plangan ball </TableHead>
                  <TableHead class="h-12 px-4 text-center font-bold text-foreground"> Ko'rish </TableHead>
               </TableRow>
            </TableHeader>
            <TableBody class="text-center">
               <TableRow v-for="(item, i) in testResults" :key="i" class="first:bg-primary/80 first:text-accent first:hover:bg-primary">
                  <TableCell class="p-4 font-medium">
                     <span>{{ i + 1 }}</span>
                  </TableCell>
                  <TableCell class="flex items-center">
                     {{ dayjs(item.started).format('DD.MM.YYYY') }}
                     <div class="shrink-0 bg-border w-px mx-2 h-4"></div>
                     {{ dayjs(item.started).format('HH:mm:ss') }} - {{ dayjs(item.finished).format('HH:mm:ss') }}</TableCell
                  >
                  <TableCell class="p-4">
                     <span>{{ item.type }}</span>
                  </TableCell>
                  <TableCell class="p-4">
                     <span>{{ item.total_ball ? item.total_ball?.toFixed(1) : 0 }}</span>
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
