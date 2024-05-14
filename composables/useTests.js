import { ref } from 'vue';

export const useTests = () => {
   const api = useApi();

   const router = useRouter();

   const { $toast } = useNuxtApp();

   const loading = ref(false);

   const testTypesHome = ref([]);

   const testTypes = ref([]);

   const blogTestSciences = ref([]);

   const schoolTestSciences = ref([]);

   const blogTestSubjects = ref([]);

   const classes = ref([]);

   const testResults = ref([]);

   const testResultsById = ref([]);

   const researches = ref({});

   const dtmTestBlogsMandatorySubjects = ref([]);

   const dtmTestBlogsMainSubjects = ref([]);

   const dtmTestBlogs = ref([]);

   const testId = ref(null);

   const getTestTypesHome = async (params) => {
      loading.value = true;
      try {
         const response = await api.get('tests/test-types/home/', { params });
         testTypesHome.value = response;
      } catch (error) {
         console.error('Error getting test types home:', error);
      } finally {
         loading.value = false;
      }
   };

   const getTestTypes = async (params) => {
      loading.value = true;
      try {
         const response = await api.get('tests/test-types/', { params });
         testTypes.value = response;
      } catch (error) {
         console.error('Error getting test types:', error);
      } finally {
         loading.value = false;
      }
   };

   const getBlogTestSciences = async () => {
      try {
         const response = await api.get('tests/blogtest-sciences/');
         blogTestSciences.value = response;
      } catch (error) {
         console.error('Error geting blogtest-sciences:', error);
      }
   };

   const getSchoolTestSciences = async (data) => {
      try {
         const response = await api.get('tests/schooltest-sciences/', { params: data });
         schoolTestSciences.value = response;
      } catch (error) {
         console.error('Error geting schooltest-sciences:', error);
      }
   };

   const getBlogTestSubjects = async (params) => {
      try {
         const response = await api.get('tests/blogtest-subjects/', { params });
         blogTestSubjects.value = response;
      } catch (error) {
         console.error('Error geting blogtest-subjects:', error);
      }
   };

   const getClasses = async (data) => {
      try {
         const response = await api.get('tests/schooltest-classes/', data);
         classes.value = response;
      } catch (error) {
         console.error('Error geting classes:', error);
      }
   };

   const getTestResults = async (params) => {
      loading.value = true;
      try {
         const response = await api.get('tests/tests-history/', { params });
         testResults.value = response.sort((a, b) => {
            const aDate = new Date(b.finished || b.started);
            const bDate = new Date(a.finished || a.started);
            return aDate - bDate;
         });
      } catch (error) {
         console.error('Error geting test history:', error);
      } finally {
         loading.value = false;
      }
   };

   const getTestResultsById = async (data) => {
      try {
         const response = await api.get(`tests/tests-history/${data.id}/?type=${data.type}`);
         testResultsById.value = response;
      } catch (error) {
         console.error('Error geting test history by ID:', error);
      }
   };

   const getResearchById = async (id) => {
      try {
         const response = await api.get(`tests/researches/${id}`);
         researches.value = response;
      } catch (error) {
         console.error('Error geting research by ID:', error);
      }
   };

   const getDtmTestBlogs = async (params) => {
      try {
         const response = await api.get(`tests/dtmtest-blogs/`, { params });
         dtmTestBlogs.value = response;
         dtmTestBlogsMainSubjects.value = response.filter((item) => item.type === 'basic');
         dtmTestBlogsMandatorySubjects.value = response.filter((item) => item.type === 'compulsory');
      } catch (error) {
         console.error('Error:', error);
      }
   };

   const buyExams = async (test_id, type) => {
      loading.value = true;
      testId.value = test_id;
      try {
         const response = await api.post('tests/buy-exams/', {
            test_type: test_id
         });
         if (response.code === 200) {
            $toast.success(response.message);
            getTestTypes({ category_type: type });
         }
      } catch (error) {
         $toast.error(error.response.data.message);
      } finally {
         loading.value = false;
      }
   };

   const startSchoolTest = async (parametersModel) => {
      loading.value = true;
      try {
         const response = await api.post('tests/schooltest/start/', parametersModel);
         router.push('/active-test');
      } catch (error) {
         $toast.error(error.response.data.message);
         if (error.response.data.code === 400) {
            router.push('/active-test');
         }
      } finally {
         loading.value = false;
      }
   };

   const startBlogTest = async (parametersModel) => {
      loading.value = true;
      try {
         const response = await api.post('tests/blogtest/start/', parametersModel);
         router.push('/active-test');
      } catch (error) {
         $toast.error(error.response.data.message);
         if (error.response.data.code === 400) {
            router.push('/active-test');
         }
      } finally {
         loading.value = false;
      }
   };

   const startResearchesTest = async (parametersModel) => {
      loading.value = true;
      try {
         const response = await api.post(`tests/researchtest/start/`, parametersModel);
         router.push('/active-test');
      } catch (error) {
         $toast.error(error.response.data.message);
         if (error.response.data.code === 400) {
            router.push('/active-test');
         }
      } finally {
         loading.value = false;
      }
   };

   const startDtmTest = async (parametersModel) => {
      loading.value = true;
      try {
         const response = await api.post(`tests/dtmtest/start/`, parametersModel);
         router.push('/active-test');
      } catch (error) {
         $toast.error(error.response.data.message);
         if (error.response.data.code === 400) {
            router.push('/active-test');
         }
      } finally {
         loading.value = false;
      }
   };

   return {
      getTestTypesHome,
      getTestTypes,
      getBlogTestSciences,
      getSchoolTestSciences,
      getBlogTestSubjects,
      getClasses,
      getTestResults,
      getTestResultsById,
      getResearchById,
      getDtmTestBlogs,
      buyExams,
      startDtmTest,
      startSchoolTest,
      startResearchesTest,
      startBlogTest,
      testTypesHome,
      testTypes,
      blogTestSciences,
      schoolTestSciences,
      blogTestSubjects,
      classes,
      testResults,
      testResultsById,
      researches,
      dtmTestBlogs,
      dtmTestBlogsMainSubjects,
      dtmTestBlogsMandatorySubjects,
      testId,
      loading
   };
};
