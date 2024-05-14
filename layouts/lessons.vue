<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from '@/components/layouts/default/AppHeader.vue';
import CourseSidebar from '@/components/shared/CourseSidebar.vue';

const courseStore = useCourseStore();

const route = useRoute();

const course_id = ref(route.params.slug);

onMounted(async () => {
   await courseStore.getCoursesId(course_id.value);
});
</script>

<template>
   <div>
      <AppHeader />
      <div class="py-8">
         <div class="container">
            <div class="grid gap-6 xl:grid-cols-6">
               <div class="xl:col-span-4">
                  <slot />
               </div>
               <div class="h-min xl:col-span-2">
                  <CourseSidebar :course="courseStore.course" :courseId="course_id" />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
