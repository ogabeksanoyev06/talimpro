import { d as defineStore } from './server.mjs';
import { ref } from 'vue';
import { u as useApi } from './useApi-B16mdXqT.mjs';

const useCommonStore = defineStore("common", () => {
  const api = useApi();
  const loading = ref(false);
  const testTypesHome = ref([]);
  const universities = ref([]);
  const statistics = ref([]);
  const regions = ref([]);
  const districts = ref([]);
  const schools = ref([]);
  const directions = ref([]);
  const universitiesDtmId = ref([]);
  async function getTestTypesHome() {
    try {
      const response = await api.get("tests/test-types/home/");
      testTypesHome.value = response;
    } catch (error) {
      console.error("Error fetching test types:", error);
    }
  }
  async function getUniversities(params) {
    try {
      const response = await api.get(`universities/universities/`, { params });
      universities.value = response.results;
    } catch (error) {
      $toast.error(error.response.data.region[0]);
    }
  }
  const getUniversityDirection = async (params) => {
    try {
      const response = await api.get(`universities/university_directions/`, { params });
      directions.value = response.results;
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const getUniversitiesDtmId = async (id, params) => {
    loading.value = true;
    try {
      const response = await api.get(`tests/universities/dtm/${id}/`, { params });
      universitiesDtmId.value = response;
    } catch (error) {
      console.log(error.response.data);
    } finally {
      loading.value = false;
    }
  };
  async function getStatistics() {
    try {
      const response = await api.get("common/statistics/");
      statistics.value = response;
    } catch (error) {
      console.log(error);
    }
  }
  async function getDistricts(regionId) {
    try {
      const response = await api.get(`common/districts/?region_id=${regionId}`);
      districts.value = response;
    } catch (error) {
      console.log(error);
    }
  }
  async function getRegions() {
    try {
      const response = await api.get("common/regions/");
      regions.value = response;
    } catch (error) {
      console.log(error);
    }
  }
  async function getSchools(districtId) {
    try {
      const response = await api.get(`common/schools/?district_id=${districtId}`);
      schools.value = response;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    getTestTypesHome,
    getUniversities,
    getUniversityDirection,
    getStatistics,
    getDistricts,
    getRegions,
    getSchools,
    getUniversitiesDtmId,
    testTypesHome,
    statistics,
    universities,
    directions,
    regions,
    districts,
    schools,
    universitiesDtmId,
    loading
  };
});

export { useCommonStore as u };
//# sourceMappingURL=common-CBWtjeDP.mjs.map
