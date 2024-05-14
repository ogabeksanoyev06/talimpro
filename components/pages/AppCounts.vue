<script setup>
import { ref, onMounted } from 'vue';

const { getStatistics, statistics, loading } = useCommon();

onMounted(() => {
   getStatistics();
});
</script>

<template>
   <section class="mt-8 sm:mt-20">
      <div class="container">
         <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 sm:gap-6 justify-center">
            <div class="flex items-center gap-6 p-3 bg-card border rounded-md sm:p-4">
               <img alt="" loading="lazy" class="w-20 h-20 sm:w-24 sm:h-24" src="/assets/svg/students.svg" />
               <dl class="flex flex-col gap-y-2">
                  <dt class="text-2xl font-medium sm:text-4xl">{{ statistics.users_count }} +</dt>
                  <dd class="text-base sm:text-lg">Umumiy foydalanuvchilar</dd>
               </dl>
            </div>
            <div class="flex items-center gap-6 p-3 bg-card border rounded-md sm:p-4 group">
               <img alt="" loading="lazy" class="w-20 h-20 sm:w-24 sm:h-24" src="/assets/svg/hello.svg" />
               <dl class="flex flex-col gap-y-2">
                  <dt class="text-2xl font-medium sm:text-4xl">{{ statistics.schools_count }} +</dt>
                  <dd class="text-lg">Maktablar</dd>
               </dl>
            </div>
            <div class="flex items-center gap-6 p-3 bg-card border rounded-md sm:p-4">
               <img alt="" loading="lazy" class="w-20 h-20 sm:w-24 sm:h-24" src="/assets/svg/courses.svg" />
               <dl class="flex flex-col gap-y-2">
                  <dt class="text-2xl font-medium sm:text-4xl">20 000 +</dt>
                  <dd class="text-base sm:text-lg">Testlar</dd>
               </dl>
            </div>
         </div>
      </div>
   </section>
</template>
