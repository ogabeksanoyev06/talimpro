export default defineNuxtRouteMiddleware((to, from) => {
   const token = useCookie('access_token');

   if (token.value && (to.path === '/auth/login' || to.path === '/auth/register')) {
      return navigateTo('/');
   }

   if (!token.value && !['/auth/login', '/auth/register'].includes(to.path)) {
      return navigateTo('/auth/login');
   }
});
