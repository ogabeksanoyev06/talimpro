<script setup>
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import Button from '~/components/ui/button/Button.vue';
import { useTestStore } from '~/stores/test';

definePageMeta({
   middleware: 'auth'
});

const router = useRouter();

const testStore = useTestStore();
const { testTypes, testId, loading } = storeToRefs(testStore);

const handleTestStart = async (test_type) => {
   switch (test_type) {
      case test.TYPE_DTM:
         router.push('/test-types/dtm');
         break;
      case test.TYPE_BLOG:
         router.push('/test-types/blog');
         break;
      case test.TYPE_SCHOOL:
         router.push('/test-types/school');
         break;
      default:
         break;
   }
};
await testStore.getTestTypes({ category_type: 'test' });
</script>

<template>
   <div class="py-8 sm:py-12 bg-gray-100 dark:bg-transparent">
      <div class="container">
         <div class="space-y-2">
            <h1 class="text-2xl sm:text-4xl font-semibold tracking-tight">Abiturientlar va o'quvchilar uchun test topshirish tizimi</h1>
            <p class="text-base sm:text-lg text-muted-foreground">DTM talablari asosida tuzilgan 40 000 ta test savollaridan foydalangan holda test topshirish imkoni</p>
         </div>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <div
               v-for="item in testTypes"
               :key="item.id"
               class="relative rounded-xl bg-card border-b border-border dark:border-white p-4 md:p-6 flex flex-col cursor-pointer transition-300 hover:shadow-card h-full gap-2 md:gap-4"
            >
               <div class="flex-grow flex flex-col gap-2">
                  <h3 class="text-xl font-semibold w-full">{{ item.title }}</h3>
                  <span class="text-justify sm:text-start">
                     {{ item.short_description }}
                  </span>
               </div>
               <div class="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <Button v-if="item.is_free || item.bought" @click="handleTestStart(item.name)">
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
                        v-if="loading && item.id === testId"
                     >
                        <path
                           fill="currentColor"
                           d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                        ></path>
                     </svg>
                     Testni boshlash
                  </Button>
                  <Button v-if="!item.is_free && !item.bought" :disabled="loading && item.id === testId" @click="testStore.buyExams(item.id, 'test')">
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
                        v-if="loading && item.id === testId"
                     >
                        <path
                           fill="currentColor"
                           d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                        ></path>
                     </svg>
                     Sotib olish
                  </Button>
                  <Button variant="outline">Hisobni to'ldirish</Button>
               </div>
               <div class="absolute top-1 right-1">
                  <Badge variant="outline" class="rounded-lg text-green-500">{{ currencyFormat(item.price) }} UZS</Badge>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
