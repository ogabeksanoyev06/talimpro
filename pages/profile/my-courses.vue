<script setup>
definePageMeta({ layout: 'cabinet' });

const courseStore = useCourseStore();

courseStore.getBoughtCourses();
</script>

<template>
   <div>
      <h3 class="text-base sm:text-xl font-semibold tracking-tight mb-4">Mening kurslarim</h3>
      <div class="grid grid-cols-1 gap-6">
         <NuxtLink
            v-for="item in courseStore.boughtCourses"
            :key="item.id"
            :to="`/courses/${item.course.id}`"
            class="flex flex-col border-b border-gray-300 bg-secondary gap-2 p-3 sm:p-6 md:p-10 cursor-pointer relative group rounded-xl"
         >
            <h3 class="text-xl sm:text-2xl font-semibold leading-none tracking-tight mb-4">{{ item.course.title }}</h3>
            <p class="text-sm text-muted-foreground mb-2">{{ item.course.teacher }}</p>
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
                  <span class="truncate">{{ item.course.modules_count }} ta modul</span>
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
                  <span class="truncate">{{ item.course.lessons_count }} ta video</span>
               </div>
            </div>
            <div class="absolute right-2 top-2 w-10 h-10 bg-secondary flex justify-center items-center rounded-full transition-all duration-300 group-hover:bg-primary">
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
                  class="lucide lucide-arrow-up rotate-45 w-5 h-5 group-hover:text-card"
               >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
               </svg>
            </div>
         </NuxtLink>
      </div>
   </div>
</template>
