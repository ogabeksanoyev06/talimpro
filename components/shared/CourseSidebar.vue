<script setup>
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useRoute } from 'vue-router';
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
   course: {
      type: Object,
      required: true
   },
   courseId: {
      type: String
   }
});

const route = useRoute();

const activeModule = ref('');

const findActiveModule = () => {
   if (!props.course || !props.course.modules) {
      return;
   }
   const lessonId = route.params.lessonId;
   const foundModule = props.course?.modules.find((module) => module.lessons.some((lesson) => lesson.slug === lessonId));
   if (foundModule) {
      activeModule.value = `${foundModule.id}${lessonId}`;
   } else {
      activeModule.value = '';
   }
};

watch(
   () => route.params.lessonId,
   () => {
      findActiveModule();
   }
);

watch(
   () => props.course,
   (newCourse) => {
      if (newCourse && newCourse.modules) {
         findActiveModule();
      }
   },
   { immediate: true }
);
</script>

<template>
   <Accordion type="single" class="w-full border-border h-full" :collapsible="true" v-model="activeModule">
      <AccordionItem v-for="(module, i) in course.modules" :key="i" :value="`${module.id}${route.params.lessonId}`">
         <AccordionTrigger class="flex w-full items-center justify-between p-4 font-medium transition-all text-sm bg-muted/80">
            {{ module.name }}
         </AccordionTrigger>
         <AccordionContent class="text-sm pb-0">
            <nuxt-link
               v-for="lesson in module.lessons"
               :key="lesson.id"
               :to="`/courses/${courseId}/lessons/${lesson.slug}`"
               class="relative border-muted-foreground/10 border-b last:border-b-0 p-4 group transition-all duration-300 flex items-center justify-between"
               :class="{ 'bg-blue-500/5': lesson.slug === route.params.lessonId }"
            >
               <div class="flex items-center space-x-3 font-medium">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true"
                     role="img"
                     font-size="16"
                     class="iconify iconify--icon-park-solid flex-shrink-0"
                     width="1em"
                     height="1em"
                     viewBox="0 0 48 48"
                     v-if="lesson.is_free || course?.is_bought"
                  >
                     <defs>
                        <mask id="iconifyReact10">
                           <g fill="none" stroke-linejoin="round" stroke-width="4">
                              <path fill="#fff" stroke="#fff" d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></path>
                              <path fill="#000" stroke="#000" d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"></path>
                           </g>
                        </mask>
                     </defs>
                     <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#iconifyReact10)"></path>
                  </svg>
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                     aria-hidden="true"
                     role="img"
                     font-size="16"
                     class="iconify iconify--solar flex-shrink-0"
                     width="1em"
                     height="1em"
                     viewBox="0 0 24 24"
                     v-else
                  >
                     <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M5.25 10.055V8a6.75 6.75 0 0 1 13.5 0v2.055c1.115.083 1.84.293 2.371.824C22 11.757 22 13.172 22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16c0-2.828 0-4.243.879-5.121c.53-.531 1.256-.741 2.371-.824M6.75 8a5.25 5.25 0 0 1 10.5 0v2.004C16.867 10 16.451 10 16 10H8c-.452 0-.867 0-1.25.004z"
                        clip-rule="evenodd"
                     ></path>
                  </svg>
                  <span>{{ lesson.name }} </span>
               </div>
               <div
                  class="absolute border-2 left-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100"
                  :class="{ '!opacity-100': lesson.slug === route.params.lessonId }"
               ></div>
               <div
                  class="absolute border-2 right-0 top-0 h-full rounded-tl-sm rounded-bl-sm border-blue-500/60 transition-all opacity-0 group-hover:opacity-100"
                  :class="{ '!opacity-100': lesson.slug === route.params.lessonId }"
               ></div>
               <div><div>5:53</div></div>
            </nuxt-link>
         </AccordionContent>
      </AccordionItem>
   </Accordion>
</template>
