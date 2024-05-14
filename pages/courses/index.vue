<script setup>
import Badge from '~/components/ui/badge/Badge.vue';
import Button from '~/components/ui/button/Button.vue';
import { useCourseStore } from '~/stores/courses';

const courseStore = useCourseStore();

const fetchData = async () => {
   await courseStore.getCategories();
   courseStore.setCategoryId();
};

onMounted(fetchData);

const selectCategory = (categoryId) => {
   courseStore.selectCategory(categoryId);
};
</script>

<template>
   <div class="py-8 sm:py-12">
      <div class="container">
         <div class="flex flex-wrap justify-center sm:justify-start gap-2 mb-8">
            <Button
               v-for="item in courseStore.categories"
               :key="item.id"
               :variant="item.id === courseStore.selectedCategory ? 'default' : 'outline'"
               @click="selectCategory(item.id)"
            >
               {{ item.name }}
            </Button>
         </div>
         <p v-if="!courseStore.loading && courseStore.courses?.length === 0" class="mb-8 text-center font-bold text-base">Tanlangan kategoriya bo'yicha kurslar mavjud emas</p>
         <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" v-else>
            <NuxtLink v-for="(item, index) in courseStore.courses" :key="index" :to="`/courses/${item.id}`">
               <div class="flex flex-col overflow-hidden rounded-md border group bg-card hover:shadow-sm">
                  <div class="relative aspect-video">
                     <img
                        src="https://fozilov.uz/_next/image?url=https%3A%2F%2Fbvhkgdnpywojzhtsbvbm.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2Fimages%2F3bb5e088-4de1-4781-8564-4aff4990c5a8-mdx3jd.webp&w=1920&q=75"
                        alt=""
                     />
                  </div>
                  <div class="flex flex-col gap-y-4 p-4 group-hover:bg-muted/25 transition-all">
                     <div class="space-y-2">
                        <h3 class="text-xl font-bold">{{ item.title }}</h3>
                        <h4 class="text-base font-medium text-foreground">{{ item.teacher }}</h4>
                        <p class="text-sm sm:text-base text-muted-foreground/80 line-clamp-2">
                           {{ item.description }}
                        </p>
                     </div>
                     <div class="flex items-center gap-x-4">
                        <div class="flex items-center gap-x-2">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              font-size="18"
                              class="iconify iconify--fluent"
                              width="1em"
                              height="1em"
                              viewBox="0 0 20 20"
                           >
                              <path
                                 fill="currentColor"
                                 d="M5 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1zm6-6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM2 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                              ></path>
                           </svg>
                           <span class="text-sm sm:text-base">{{ item.modules_count }} ta modul</span>
                        </div>
                        <div class="flex items-center gap-x-2">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              font-size="18"
                              class="iconify iconify--iconoir"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                           >
                              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                 <path d="M21 7.6v12.8a.6.6 0 0 1-.6.6H7.6a.6.6 0 0 1-.6-.6V7.6a.6.6 0 0 1 .6-.6h12.8a.6.6 0 0 1 .6.6"></path>
                                 <path d="M18 4H4.6a.6.6 0 0 0-.6.6V18m8.909-6.455a.6.6 0 0 0-.909.515v3.88a.6.6 0 0 0 .909.515l3.233-1.94a.6.6 0 0 0 0-1.03z"></path>
                              </g>
                           </svg>
                           <span class="text-sm sm:text-base">{{ item.lessons_count }} ta video</span>
                        </div>
                     </div>
                     <div class="flex flex-wrap items-center justify-between gap-1">
                        <div class="text-xl font-medium">{{ currencyFormat(item.price) }} UZS</div>
                        <Badge size="lg">Tekin</Badge>
                     </div>
                  </div>
               </div>
            </NuxtLink>
         </div>
      </div>
   </div>
</template>
