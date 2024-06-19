import { d as defineStore, k as useNuxtApp } from './server.mjs';
import { ref, computed } from 'vue';
import { u as useApi } from './useApi-B16mdXqT.mjs';

const useUserStore = defineStore("user", () => {
  const api = useApi();
  const { $toast } = useNuxtApp();
  const loading = ref(false);
  const user = ref({});
  const formatUserData = (data) => ({
    ...data,
    phone: data.phone ? data.phone.slice(3) : data.phone,
    region: data.region ? data.region.id : data.region,
    district: data.district ? data.district.id : null,
    school: data.school ? data.school.id : null
  });
  const handleError = (error) => {
    var _a;
    const errorData = ((_a = error.response) == null ? void 0 : _a.data) || {};
    if (errorData) {
      Object.entries(errorData).forEach(([key, values]) => {
        $toast.error(`${key}: ${values.join(", ")}`);
      });
    } else {
      $toast.error(error.message || "Aniq xatolik haqida ma'lumot yo'q");
    }
  };
  const fetchUser = async () => {
    loading.value = true;
    try {
      const response = await api.get("users/profile/");
      user.value = formatUserData(response);
    } catch (error) {
      handleError(error);
    } finally {
      loading.value = false;
    }
  };
  const createFormData = () => {
    const formData = new FormData();
    Object.entries(user.value).forEach(([key, value]) => {
      if (value !== null && value !== void 0) {
        if (key === "phone") {
          formData.append(key, "998" + value);
        } else {
          formData.append(key, value);
        }
      }
    });
    return formData;
  };
  const updateUserProfile = async () => {
    loading.value = true;
    const formData = createFormData();
    console.log(formData);
    try {
      const response = await api.patch("users/profile/", formData);
      await fetchUser();
      $toast.success("Profil muvaffaqiyatli o`zgartirildi");
    } catch (error) {
      handleError(error);
    } finally {
      loading.value = false;
    }
  };
  const fullName = computed(() => {
    return `${user.value.last_name || ""} ${user.value.first_name || ""}`.trim();
  });
  const fullNameInitial = computed(() => {
    const firstNameInitial = user.value.first_name ? user.value.first_name.charAt(0) : "";
    const lastNameInitial = user.value.last_name ? user.value.last_name.charAt(0) : "";
    return firstNameInitial + lastNameInitial;
  });
  return {
    user,
    loading,
    fullName,
    fullNameInitial,
    fetchUser,
    updateUserProfile
  };
});

export { useUserStore as u };
//# sourceMappingURL=user-BLCEGJvj.mjs.map
