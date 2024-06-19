<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

definePageMeta({ layout: 'lessons', middleware: 'auth' });

const route = useRoute();

const courseStore = useCourseStore();
const { lesson, loading } = storeToRefs(courseStore);

const lesson_id = ref(route.params.lessonId);

await courseStore.getLessonsId(lesson_id.value);
</script>

<template>
   <div class="sticky top-24">
      <div class="space-y-4">
         <div class="relative aspect-video overflow-hidden border bg-muted">
            <div class="absolute inset-x-0 inset-y-0 h-full w-full">
               <div class="absolute inset-0 flex flex-col items-center justify-center bg-muted gap-y-4" v-if="!loading && lesson.is_free">
                  <svg
                     stroke="currentColor"
                     fill="none"
                     stroke-width="2"
                     viewBox="0 0 24 24"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     class="h-8 w-8 animate-spin"
                     height="1em"
                     width="1em"
                     xmlns="http://www.w3.org/2000/svg"
                     v-if="loading"
                  >
                     <line x1="12" y1="2" x2="12" y2="6"></line>
                     <line x1="12" y1="18" x2="12" y2="22"></line>
                     <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                     <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                     <line x1="2" y1="12" x2="6" y2="12"></line>
                     <line x1="18" y1="12" x2="22" y2="12"></line>
                     <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                     <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                  </svg>
                  <iframe
                     :src="'https://kinescope.io/embed/' + lesson.video"
                     allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write"
                     frameborder="0"
                     allowfullscreen
                     style="position: absolute; width: 100%; height: 100%; top: 0; left: 0"
                  ></iframe>
               </div>
               <div class="absolute inset-0 flex flex-col items-center justify-center bg-muted gap-y-4" v-if="!lesson.is_free">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true"
                     role="img"
                     font-size="48"
                     class="iconify iconify--fxemoji w-10 h-10"
                     width="1em"
                     height="1em"
                     viewBox="0 0 512 512"
                  >
                     <path
                        fill="#B1B4B5"
                        d="M376.749 349.097c-13.531 0-24.5-10.969-24.5-24.5V181.932c0-48.083-39.119-87.203-87.203-87.203c-48.083 0-87.203 39.119-87.203 87.203v82.977c0 13.531-10.969 24.5-24.5 24.5s-24.5-10.969-24.5-24.5v-82.977c0-75.103 61.1-136.203 136.203-136.203s136.203 61.1 136.203 136.203v142.665c0 13.531-10.969 24.5-24.5 24.5"
                     ></path>
                     <path
                        fill="#FFB636"
                        d="M414.115 497.459H115.977c-27.835 0-50.4-22.565-50.4-50.4V274.691c0-27.835 22.565-50.4 50.4-50.4h298.138c27.835 0 50.4 22.565 50.4 50.4v172.367c0 27.836-22.565 50.401-50.4 50.401"
                     ></path>
                     <path
                        fill="#FFD469"
                        d="M109.311 456.841h-2.525c-7.953 0-14.4-6.447-14.4-14.4V279.309c0-7.953 6.447-14.4 14.4-14.4h2.525c7.953 0 14.4 6.447 14.4 14.4v163.132c0 7.953-6.447 14.4-14.4 14.4"
                     ></path>
                  </svg>
                  <p class="text-sm">Sizda ushbu videoni ko'rish huquqi mavjud emas.</p>
               </div>
            </div>
         </div>
         <h2 class="text-2xl font-bold">{{ lesson.name }}</h2>
         <div class="flex flex-wrap gap-4">
            <a
               target="_blank"
               v-for="(material, i) in lesson.materials"
               :key="i"
               :href="material.file"
               class="flex flex-col justify-center items-center space-y-1 group text-center border border-border border-dashed min-w-[150px] py-2 px-4"
            >
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
                  class="lucide lucide-cloud-download text-blue-500 w-6 h-6 group-hover:animate-bounce"
               >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m8 17 4 4 4-4" />
               </svg>
               <span class="text-sm font-medium"> {{ material.name }}</span>
            </a>
         </div>
      </div>
   </div>
</template>
