export const useAuthStore = defineStore('auth', () => {
   const api = useApi();

   const { $toast } = useNuxtApp();
   const accessToken = useCookie('access_token');
   const refreshToken = useCookie('refresh_token');
   const router = useRouter();
   const loading = ref(false);

   const login = async (form) => {
      loading.value = true;
      try {
         const response = await api.post('users/login/', form);
         accessToken.value = response.access;
         refreshToken.value = response.refresh;
         router.push('/');
         $toast.success('Tizimga muvaffaqiyatli kirdingiz!');
      } catch (error) {
         $toast.error(error.response.data.detail || 'Login xatoligi');
      } finally {
         loading.value = false;
      }
   };

   const register = async (user, selectedUserType) => {
      loading.value = true;
      try {
         const response = await api.post('users/register/', {
            phone: '998' + user.phone,
            first_name: user.firstname,
            last_name: user.lastname,
            username: user.username,
            password: user.password,
            type: selectedUserType
         });

         if (response && parseInt(response.code) === 201) {
            router.push('/auth/login');
            $toast.success("Ro'yxatdan muvaffaqiyatli o'tdingiz!");
         }
      } catch (error) {
         let errorMessage = "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.";
         if (error.response && error.response.data && error.response.data.result && error.response.data.result.errors) {
            const errorObject = error.response.data.result.errors;
            const errorMessages = Object.values(errorObject).flat();
            errorMessage = errorMessages.join(' ');
         }
         $toast.error(errorMessage);
      } finally {
         loading.value = false;
      }
   };

   const resetPassword = async (form) => {
      loading.value = true;
      try {
         const response = await api.post('users/reset-password/', form);
         if (response.code === 200) {
            $toast.success("Parol muvaffaqiyatli o'zgartirildi");
         }
      } catch (error) {
         $toast.error(error.response.data.detail || 'Xatolik yuz berdi');
      } finally {
         loading.value = false;
      }
   };

   const isAuthenticated = computed(() => {
      return !!accessToken.value && !!refreshToken.value;
   });

   const logout = () => {
      accessToken.value = null;
      refreshToken.value = null;
      router.push('/auth/login');
      $toast.success('Tizimdan chiqdingiz');
   };

   return { login, register, resetPassword, logout, isAuthenticated };
});
