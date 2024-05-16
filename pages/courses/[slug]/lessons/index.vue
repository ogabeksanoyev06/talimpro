<script setup>
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { useCourseStore } from '~/stores/courses';

definePageMeta({ layout: 'lessons', middleware: 'auth' });

const courseStore = useCourseStore();
const { course, loading } = storeToRefs(courseStore);

const route = useRoute();

const course_id = ref(Number(route.params.slug));

onMounted(async () => {
   await courseStore.getCoursesId(course_id.value);
   const firstNonEmptySection = course.value?.modules.find((section) => section.lessons.length > 0);
   if (firstNonEmptySection) {
      const firstLesson = firstNonEmptySection.lessons[0];
      navigateTo(`/courses/${course_id.value}/lessons/${firstLesson.slug}`);
   }
});
</script>
<template>
   <div></div>
</template>
