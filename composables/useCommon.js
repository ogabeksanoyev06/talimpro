import { ref } from 'vue';

export const useCommon = () => {
   const api = useApi();
   const { $toast } = useNuxtApp();

   const loading = ref(false);

   const regions = ref([]);

   const districts = ref([]);

   const schools = ref([]);

   const statistics = ref([]);

   const universities = ref([]);

   const directions = ref([]);

   const getDistricts = async (regionId) => {
      try {
         const response = await api.get(`common/districts/?region_id=${regionId}`);
         districts.value = response;
      } catch (error) {
         console.log(error);
      }
   };

   const getRegions = async (data) => {
      try {
         const response = await api.get('common/regions/', data);
         regions.value = response;
      } catch (error) {
         console.log(error);
      }
   };

   const getSchools = async (districtId) => {
      try {
         const response = await api.get(`common/schools/?district_id=${districtId}`);
         schools.value = response;
      } catch (error) {
         console.log(error);
      }
   };

   const getStatistics = async (data) => {
      loading.value = true;
      try {
         const response = await api.get('common/statistics/', data);
         statistics.value = response;
      } catch (error) {
         console.log(error);
      } finally {
         loading.value = false;
      }
   };

   const getUniversities = async (params) => {
      try {
         const response = await api.get(`universities/universities/`, { params });
         universities.value = response.results;
      } catch (error) {
         $toast.error(error.response.data.region[0]);
      }
   };

   const getUniversityDirection = async (params) => {
      try {
         const response = await api.get(`universities/university_directions/`, { params });
         directions.value = response.results;
      } catch (error) {
         console.log(error.response.data);
      }
   };

   return {
      getDistricts,
      getRegions,
      getSchools,
      getStatistics,
      getUniversities,
      getUniversityDirection,
      regions,
      schools,
      districts,
      statistics,
      universities,
      directions
   };
};
