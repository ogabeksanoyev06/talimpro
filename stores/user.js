import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useUserStore = defineStore('user', () => {
   const api = useApi();
   const { $toast } = useNuxtApp();

   const loading = ref(false);
   const user = ref({});

   const formatUserData = (data) => ({
      ...data,
      phone: data.phone ? data.phone.slice(3) : data.phone,
      region: data.region ? data.region.id : data.region,
      district: data.district ? data.district.id : data.district,
      school: data.school ? data.school.id : data.school
   });

   const handleError = (error) => {
      const errorData = error.response?.data || {};
      Object.entries(errorData).forEach(([key, values]) => {
         $toast.error(`${key}: ${values.join(', ')}`);
      });
      $toast.error(error.message || "Aniq xatolik haqida ma'lumot yo'q");
   };

   const fetchUser = async () => {
      try {
         const response = await api.get('users/profile/');
         user.value = formatUserData(response);
      } catch (error) {
         handleError(error);
      } finally {
      }
   };

   const createFormData = () => {
      const formData = new FormData();
      Object.entries(user.value).forEach(([key, value]) => {
         if (value !== null && value !== 'undefined' && key !== 'phone') {
            formData.append(key, value);
         }
      });
      if (user.value.phone !== null) {
         formData.append('phone', '998' + user.value.phone);
      }
      return formData;
   };

   const updateUserProfile = async () => {
      loading.value = true;
      try {
         const formData = createFormData();
         const response = await api.patch('users/profile/', formData);
         user.value = formatUserData(response);
         fetchUser();
         $toast.success('Profile muvaffaqiyatli o`zgartirildi');
      } catch (error) {
         handleError(error);
      } finally {
         loading.value = false;
      }
   };

   const fullName = computed(() => {
      return `${user.value.last_name || ''} ${user.value.first_name || ''}`.trim();
   });

   const fullNameInitial = computed(() => {
      const firstNameInitial = user.value.first_name ? user.value.first_name.charAt(0) : '';
      const lastNameInitial = user.value.last_name ? user.value.last_name.charAt(0) : '';
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
