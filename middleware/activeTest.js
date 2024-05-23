import { useActiveTestStore } from '@/stores/ActiveTestStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
   const activeTestStore = useActiveTestStore();
   await activeTestStore.getActiveTest();

   if (to.path === '/active-test' && !activeTestStore.hasActiveTest) {
      return navigateTo('/profile/tests-results');
   }
});
