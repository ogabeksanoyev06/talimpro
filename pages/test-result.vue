<script setup>
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

definePageMeta({ middleware: 'auth' });

const testResult = useCookie('testResult');

const totalBasic = computed(() => {
   return testResult.value?.blogs?.filter((blog) => blog?.dtmtest_blog?.type === 'basic').reduce((sum, blog) => sum + blog.total_ball, 0);
});

const totalCompulsory = computed(() => {
   return testResult.value?.blogs?.filter((blog) => blog.dtmtest_blog?.type === 'compulsory').reduce((sum, blog) => sum + blog.total_ball, 0);
});

const typeName = computed(() => {
   let typeValue = '';
   const testType = testResult.value?.type || testResult.value?.blogs[0]?.type;
   switch (testType) {
      case testType.TYPE_DTM:
         typeValue = 'DTM test';
         break;
      case testType.TYPE_BLOG:
         typeValue = 'Blog test';
         break;
      case testType.TYPE_SCHOOL:
         typeValue = 'Maktab o`quvchilari uchun test';
         break;
      case testType.TYPE_RESEARCH:
         typeValue = 'Xalqaro tadqiqot test';
         break;
      default:
         break;
   }
   return typeValue;
});
</script>

<template>
   <div class="py-4">
      <div class="container">
         <h3 class="text-xl text-center mb-3 font-semibold">{{ typeName }}</h3>
         <div class="border">
            <Table v-if="testResult?.type === testType.TYPE_RESEARCH" class="whitespace-nowrap">
               <TableBody>
                  <TableRow class="">
                     <TableHead class="p-4 text-center"> Yo'nalish nomi </TableHead>
                     <TableHead class="p-4 text-center"> Savollar soni </TableHead>
                     <TableHead class="p-4 text-center"> To'gri javoblar </TableHead>
                     <TableHead class="p-4 text-center"> Xato javoblar </TableHead>
                     <TableHead class="p-4 text-center"> To'plangan ball </TableHead>
                  </TableRow>
                  <TableRow class="font-medium">
                     <TableCell class="p-4 text-center"> {{ testResult.specification }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.questions?.length }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.correct_ans }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.questions?.length - testResult.correct_ans }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.total_ball }} </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
            <Table v-if="testResult?.type === testType.TYPE_BLOG" class="whitespace-nowrap">
               <TableBody>
                  <TableRow class="text-base">
                     <TableHead class="p-4 text-center"> Fan nomi </TableHead>
                     <TableHead class="p-4 text-center"> Savollar soni </TableHead>
                     <TableHead class="p-4 text-center"> To'gri javoblar </TableHead>
                     <TableHead class="p-4 text-center"> Xato javoblar </TableHead>
                     <TableHead class="p-4 text-center"> To'plangan ball </TableHead>
                  </TableRow>
                  <TableRow class="font-medium">
                     <TableCell class="p-4 text-center"> {{ testResult.science }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.questions?.length }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.correct_ans }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.incorrect_ans }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult?.total_ball }} </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
            <Table v-if="testResult?.type === testType.TYPE_SCHOOL" class="whitespace-nowrap">
               <TableBody>
                  <TableRow class="text-base">
                     <TableHead class="p-4 text-center"> Fan nomi </TableHead>
                     <TableHead class="p-4 text-center"> Savollar soni </TableHead>
                     <TableHead class="p-4 text-center"> To'gri javoblar </TableHead>
                     <TableHead class="p-4 text-center"> Xato javoblar </TableHead>
                     <TableHead class="p-4 text-center"> To'plangan ball </TableHead>
                  </TableRow>
                  <TableRow class="font-medium">
                     <TableCell class="p-4 text-center"> {{ testResult.science }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.questions?.length }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.correct_ans }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult.incorrect_ans }} </TableCell>
                     <TableCell class="p-4 text-center"> {{ testResult?.total_ball }} </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
            <Table class="text-center whitespace-nowrap" v-if="testResult?.blogs?.length > 0 && testResult?.blogs[0]?.type === testType.TYPE_DTM">
               <TableBody>
                  <TableRow class="text-base">
                     <TableHead class="p-4 text-center"> Blog fanlari </TableHead>
                     <TableHead class="p-4 text-center"> To'g'ri javoblar </TableHead>
                     <TableHead class="p-4 text-center"> Ball </TableHead>
                     <TableHead class="p-4 text-center">To'plangan ball </TableHead>
                  </TableRow>
                  <TableRow class="font-medium" v-for="item in testResult.blogs" :key="item.id">
                     <TableCell class="p-4">
                        {{ item.dtmtest_blog?.type === 'basic' ? item.blog_science : `${item.blog_science} (majburiy fan)` }}
                     </TableCell>
                     <TableCell class="p-4">
                        <span class="text-green-600" style="font-size: large">{{ item.correct_ans_count ? item.correct_ans_count : 0 }}</span>
                        /{{ item.dtmtest_blog.question_count }}
                     </TableCell>
                     <TableCell class="p-4"> {{ item.dtmtest_blog.ball }} </TableCell>
                     <TableCell class="p-4 text-green-600" style="font-size: large"> {{ item.total_ball }} </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell class="p-4 font-bold text-base" colspan="4"> Natijalar</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell class="p-4 font-semibold text-base" colspan="2"> Asosiy fandan to'plangan ball:</TableCell>
                     <TableCell class="p-4 font-semibold text-base" colspan="2"> {{ totalBasic }} </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell class="p-4 font-semibold text-base" colspan="2"> Majburiy fandan to'plangan ball:</TableCell>
                     <TableCell class="p-4 font-semibold text-base" colspan="2"> {{ totalCompulsory }} </TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell class="p-4 font-semibold text-base" colspan="2"> 5 ta fandan to'plangan ball:</TableCell>
                     <TableCell class="p-4 font-semibold text-base" colspan="2"> {{ testResult?.total_ball }} </TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </div>
         <div class="flex justify-center mt-4">
            <nuxt-link to="/profile/tests-results">
               <Button>Barcha natijalar</Button>
            </nuxt-link>
         </div>
      </div>
   </div>
</template>
