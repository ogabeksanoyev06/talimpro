import { a as useCookie, g as useRuntimeConfig, k as useNuxtApp } from './server.mjs';
import axios from 'axios';

const useApi = () => {
  const config = useRuntimeConfig();
  const { $toast } = useNuxtApp();
  const api = axios.create({
    baseURL: config.public.apiBaseUrl
  });
  api.interceptors.request.use(
    (config2) => {
      const accessToken = useCookie("access_token").value;
      if (accessToken) {
        config2.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config2;
    },
    (error) => Promise.reject(error)
  );
  api.interceptors.response.use(
    (response) => {
      var _a;
      return (_a = response.data) != null ? _a : { noData: "empty data" };
    },
    async (error) => {
      if (error.response && error.response.status === 403 && !error.config._retry) {
        const refreshToken = useCookie("refresh_token").value;
        if (refreshToken) {
          try {
            const { access } = await api.post("users/token/refresh/", { refresh: refreshToken });
            useCookie("access_token").value = access;
            error.config.headers.Authorization = `Bearer ${access}`;
            error.config._retry = true;
            return api.request(error.config);
          } catch (refreshError) {
            $toast.error("Token yangilash muvaffaqiyatsiz. Iltimos, qaytadan kirish.", refreshError.message);
            useCookie("access_token").value = null;
            useCookie("refresh_token").value = null;
          }
        }
      }
      return Promise.reject(error);
    }
  );
  return api;
};

export { useApi as u };
//# sourceMappingURL=useApi-B16mdXqT.mjs.map
