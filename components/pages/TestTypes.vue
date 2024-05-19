<script setup>
import { useCommonStore } from '@/stores/common';
const commonStore = useCommonStore();

const { testTypesHome } = storeToRefs(commonStore);

onMounted(async () => {
   await commonStore.getTestTypesHome();
});
</script>

<template>
   <section class="mt-8 sm:mt-20">
      <div class="container">
         <div class="space-y-2 mb-4 sm:mb-8">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Bizda mavjud testlar</h1>
            <p class="text-lg text-muted-foreground"></p>
         </div>
         <div class="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3 sm:gap-6 justify-center">
            <div v-for="item in testTypesHome" :key="item.id">
               <div class="flex items-center bg-card border rounded-md group min-h-[170px]">
                  <dl class="flex flex-col gap-y-2 p-3 sm:p-4 sm:col-span-9">
                     <dt class="text-base sm:text-lg font-bold">{{ item.title }}</dt>
                     <dd class="text-sm">
                        {{ item.short_description }}
                     </dd>
                  </dl>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
