export const useCourses = () => {
   const router = useRouter();

   const api = useApi();

   const { $toast } = useNuxtApp();

   const loading = ref(false);

   const courses = ref([]);

   const categories = ref([]);

   const selectedCategory = ref(null);

   const course = ref({});

   const lesson = ref([]);

   const boughtCourses = ref([]);

   const getCategories = async () => {
      loading.value = true;
      try {
         const response = await api.get('courses/categories/');
         categories.value = response;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getCourses = async (params) => {
      loading.value = true;
      try {
         const response = await api.get('courses/', { params });
         courses.value = response;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getCoursesId = async (id) => {
      loading.value = true;
      try {
         const response = await api.get(`/courses/${id}`);
         course.value = response;
      } catch (error) {
         if (error.response && error.response.status === 404) {
            router.push('/courses');
         }
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getLessonsId = async (lessonId) => {
      loading.value = true;
      try {
         const response = await api.get(`/courses/lessons/${lessonId}`);
         lesson.value = response;
      } catch (error) {
         if (error.response && error.response.status === 404) {
            router.push('/courses');
         } else {
            $toast.error(error.response.data.detail);
         }
      } finally {
         loading.value = false;
      }
   };

   const setCategoryId = () => {
      if (categories.value.length > 0) {
         selectCategory(categories.value[0].id);
      }
   };

   const selectCategory = async (categoryId) => {
      selectedCategory.value = categoryId;
      await getCourses({ cat_id: categoryId });
   };

   const buyCourses = async (courseIds) => {
      loading.value = true;
      try {
         const response = await api.post('/courses/buy-course/', {
            courses: courseIds
         });
         if (response.code === 200) {
            $toast.success('Kurslar muvaffaqiyatli sotib olindi');
         }
      } catch (error) {
         $toast.error(error.response.data.message);
      } finally {
         loading.value = false;
      }
   };

   const getBoughtCourses = async () => {
      loading.value = true;
      try {
         const response = await api.get('courses/bought-courses/');
         boughtCourses.value = response.results;
      } catch (error) {
         $toast.error(error.response.data.message);
      } finally {
         loading.value = false;
      }
   };

   return {
      getCategories,
      getCourses,
      getCoursesId,
      getBoughtCourses,
      categories,
      courses,
      course,
      setCategoryId,
      selectCategory,
      selectedCategory,
      boughtCourses,
      buyCourses,
      getLessonsId,
      lesson,
      loading
   };
};
