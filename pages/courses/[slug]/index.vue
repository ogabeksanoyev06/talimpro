<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCourseStore } from '~/stores/courses';

definePageMeta({ middleware: 'auth' });

const route = useRoute();

const courseStore = useCourseStore();
const { course, loading } = storeToRefs(courseStore);

const course_id = ref(route.params.slug);

await courseStore.getCoursesId(course_id.value);
</script>

<template>
   <div class="py-8 sm:py-12">
      <div class="container">
         <div class="flex flex-col gap-y-6">
            <div class="relative flex h-40 lg:h-48 z-10 items-center justify-center overflow-hidden rounded-md border border-border">
               <div
                  class="absolute top-0 z-[-1] h-screen w-screen bg-card bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"
               ></div>
               <NuxtLink class="absolute left-4 top-4 flex h-10 w-10 items-center justify-center gap-x-3 rounded-full border bg-card hover:bg-muted" to="/courses">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true"
                     role="img"
                     font-size="18"
                     class="iconify iconify--mingcute"
                     width="1em"
                     height="1em"
                     viewBox="0 0 24 24"
                  >
                     <g fill="none" fill-rule="evenodd">
                        <path
                           d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                        ></path>
                        <path
                           fill="currentColor"
                           d="M3.076 5.617A1 1 0 0 1 4 5h10a7 7 0 1 1 0 14H5a1 1 0 1 1 0-2h9a5 5 0 1 0 0-10H6.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1-.217-1.09"
                        ></path>
                     </g>
                  </svg>
               </NuxtLink>
               <div class="flex items-center justify-center">
                  <h1 class="text-2xl md:text-4xl font-bold">{{ course.title }}</h1>
               </div>
            </div>
            <div class="grid grid-cols-1 gap-6 xl:grid-cols-5">
               <div class="xl:col-span-3">
                  <div class="sticky top-24 flex flex-col gap-y-6">
                     <div class="relative col-span-3 aspect-video overflow-hidden rounded-md bg-primary/20">
                        <div class="absolute inset-x-0 inset-y-0 h-full w-full">
                           <iframe
                              src="https://kinescope.io/embed/he2DfZYSQcEp37bsxDx6D8"
                              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write;"
                              frameborder="0"
                              allowfullscreen
                              style="position: absolute; width: 100%; height: 100%; top: 0; left: 0"
                           ></iframe>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="xl:col-span-2">
                  <div class="flex flex-col justify-between rounded-md border h-auto bg-card">
                     <div class="flex-1 space-y-4 p-4 sm:p-6">
                        <h3 class="text-xl font-bold">Kurs haqida</h3>
                        <p>
                           {{ course.description }}
                        </p>
                     </div>
                     <div>
                        <div class="flex flex-wrap items-center justify-between border-t p-4 sm:p-6 gap-4">
                           <div class="flex flex-col gap-y-2 text-sm">
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
                                    <span class="truncate">{{ course.modules_count }} ta modul</span>
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
                                    <span class="truncate">{{ course.lessons_count }} ta video</span>
                                 </div>
                              </div>
                              <div class="flex items-center gap-x-2">
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    font-size="18"
                                    class="iconify iconify--gravity-ui"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                 >
                                    <path
                                       fill="currentColor"
                                       fill-rule="evenodd"
                                       d="M13.5 8a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0M8.75 4.5a.75.75 0 0 0-1.5 0V8a.75.75 0 0 0 .3.6l2 1.5a.75.75 0 1 0 .9-1.2l-1.7-1.275z"
                                       clip-rule="evenodd"
                                    ></path>
                                 </svg>
                                 <span class="truncate font-medium">3 soat 37 daqiqa 16 sekund</span>
                              </div>
                           </div>
                           <div>
                              <div class="text-sm">Kurs narxi:</div>
                              <div class="text-2xl font-bold">{{ currencyFormat(course.price) }} UZS</div>
                           </div>
                        </div>
                        <div class="flex flex-wrap items-center justify-between border-t gap-4 p-4 sm:p-6">
                           <div class="flex items-center gap-x-3">
                              <img alt="" width="36" height="36" class="rounded-full" src="https://github.com/radix-vue.png" />
                              <span class="font-medium">{{ course.teacher?.first_name + ' ' + course.teacher?.last_name }}</span>
                           </div>
                           <div class="flex items-center justify-between gap-2">
                              <nuxt-link :to="`/courses/${course_id}/lessons`">
                                 <Button variant="outline"> Kirish</Button>
                              </nuxt-link>

                              <Dialog v-if="!course?.is_bought">
                                 <DialogTrigger as-child>
                                    <Button> Sotib olish </Button>
                                 </DialogTrigger>
                                 <DialogContent class="flex flex-col space-y-1.5 text-center sm:text-left">
                                    <DialogHeader>
                                       <DialogTitle>Sotib olish</DialogTitle>
                                       <DialogDescription> Kurs uchun faqat bir marta to'lov qilasiz va istalgan vaqtda foydalanish imkoniyatiga ega bo'lasiz. </DialogDescription>
                                    </DialogHeader>
                                    <div class="flex flex-col space-y-4 pt-4">
                                       <div class="flex flex-col space-y-1">
                                          <span class="font-bold">Karta raqam:</span><span class="text-2xl font-bold">5614 6800 0374 8007</span
                                          ><span class="text-sm text-slate-700 dark:text-slate-200">Sanoyev Og'abek</span>
                                       </div>
                                       <div class="text-sm">
                                          Agar sizda tizimda mavjud bo'lgan to'lov tizimi bo'lmasa ushbu kartaga kursda belgilangan to‘lovni amalga oshiring va skrinshotni
                                          administratorga yuboring. Yaqin vaqt ichida siz bilan aloqaga chiqamiz va kerakli kursni ochib beramiz.
                                       </div>
                                    </div>
                                    <DialogFooter class="sm:justify-between">
                                       <a target="_blank" href="">
                                          <Button variant="outline" class="w-full">
                                             <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" class="w-6 h-6 mr-2">
                                                <defs>
                                                   <linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%">
                                                      <stop offset="0%" stop-color="black" />
                                                      <stop offset="100%" stop-color="black" />
                                                   </linearGradient>
                                                </defs>
                                                <path
                                                   fill="url(#logosTelegram0)"
                                                   d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0"
                                                />
                                                <path
                                                   fill="#fff"
                                                   d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072"
                                                />
                                             </svg>
                                             <span>Adminstrator</span>
                                          </Button>
                                       </a>
                                       <Button @click="courseStore.buyCourses([Number(course_id)])" :disabled="loading">
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
                                             v-if="loading"
                                          >
                                             <path
                                                fill="currentColor"
                                                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m39.11 25.19C170.24 83.71 155 99.44 135 113.61c-2.25-24.48-8.44-49.8-38.37-67.82a87.89 87.89 0 0 1 70.5 3.4ZM40.18 133.54c28.34-20 49.57-14.68 71.87-4.39c-20.05 14.19-38.86 32.21-39.53 67.11a87.92 87.92 0 0 1-32.34-62.72m136.5 67.73c-31.45-14.55-37.47-35.58-39.71-60c12.72 5.86 26.31 10.75 41.3 10.75c11.33 0 23.46-2.8 36.63-10.08a88.2 88.2 0 0 1-38.22 59.33"
                                             ></path>
                                          </svg>
                                          Sotib olish
                                       </Button>
                                    </DialogFooter>
                                 </DialogContent>
                              </Dialog>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="rounded-md border bg-card p-6">
               <div class="flex flex-col space-y-4">
                  <h3 class="text-xl font-bold">Kurs kontenti</h3>
                  <div class="flex flex-col">
                     <Accordion type="single" class="w-full border-border" collapsible>
                        <AccordionItem v-for="Cmodule in course.modules" :key="Cmodule.id" :value="Cmodule.id">
                           <AccordionTrigger class="w-full p-4 font-medium bg-muted">
                              {{ Cmodule.name }}
                           </AccordionTrigger>
                           <AccordionContent class="pt-0">
                              <div v-for="(lesson, indexL) in Cmodule.lessons" :key="indexL" class="px-4 py-2">{{ indexL + 1 + '.' }} {{ lesson.name }}</div>
                           </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                  </div>
               </div>
            </div>
            <div class="rounded-md border bg-card p-6">
               <div class="flex flex-col space-y-4">
                  <h3 class="text-xl font-bold">Siz nimani o'rganasiz</h3>
                  <div class="border border-border bg-card rounded-md p-4">
                     <div class="grid gap-4 grid-cols-1 md:grid-cols-2 md:gap-6 items-start">
                        <div class="flex items-center space-x-2" v-for="item in course.planed_skills" :key="item">
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
                              class="lucide lucide-badge-check"
                           >
                              <path
                                 d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
                              />
                              <path d="m9 12 2 2 4-4" />
                           </svg>
                           <div class="flex flex-col space-y-1 flex-1">
                              <span class="text-base font-bold">{{ item.name }}</span>
                              <span class="tracking-wider">{{ item.description }}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="rounded-md border bg-card p-6">
               <div class="flex flex-col space-y-4">
                  <h3 class="text-xl font-bold">Kurs kim uchun</h3>
                  <div class="border border-border bg-card rounded-md p-4">
                     <div class="flex flex-col space-y-2">
                        <div class="flex items-center" v-for="item in course.who_is_course_for" :key="item.id">
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
                              class="lucide lucide-dot flex-shrink-0"
                           >
                              <circle cx="12.1" cy="12.1" r="1"></circle>
                           </svg>
                           <p class="tracking-wider flex-1">NuxtJS framewrokini o'rganishni istaganlar uchun</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
