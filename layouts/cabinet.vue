<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import AppFooter from '~/components/layouts/default/AppFooter.vue';
import AppHeader from '~/components/layouts/default/AppHeader.vue';

const userStore = useUserStore();

const router = useRouter();

const route = useRoute();

const currentRoute = computed(() => route.path);

const menu = ref([
   {
      title: 'Asosiy malumotlar',
      path: '/profile'
   },
   {
      title: 'Mening kurslarim',
      path: '/profile/my-courses'
   },
   {
      title: 'Hisobni to`ldirish',
      path: '/profile/top-up-balance'
   },
   {
      title: 'To`lovlar tarixi',
      path: '/profile/payment-history'
   },
   {
      title: 'Test natijalari',
      path: '/profile/tests-results'
   }
]);

const user = computed(() => userStore.user);

userStore.fetchUser();
</script>

<template>
   <div>
      <AppHeader />
      <main class="py-8">
         <div class="container">
            <div class="grid gap-6 md:grid-cols-6">
               <div class="md:col-span-2">
                  <div class="sticky top-28 flex flex-col gap-y-6">
                     <div class="flex flex-col gap-y-3 p-4 bg-card border rounded-md">
                        <div class="flex items-center gap-x-3">
                           <div class="rounded-full relative">
                              <div
                                 class="relative overflow-hidden shrink-0 before:border before:border-solid before:border-black/10 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full"
                              >
                                 <div class="flex items-center justify-center text-card h-full w-full text-base object-cover bg-primary">
                                    {{ userStore.fullNameInitial }}
                                 </div>
                                 <div class="w-full h-full object-cover bg-white">
                                    <img
                                       alt="avatar-image"
                                       class="object-cover w-full h-full"
                                       src="https://cdn.commeta.uz/100x/https://cdn.commeta.uz/static/review/svg/avatar/anonymous.svg"
                                    />
                                 </div>
                              </div>
                           </div>
                           <div class="flex flex-col">
                              <div class="sm:text-base lg:text-xl font-bold">
                                 {{ userStore.fullName }}
                              </div>
                              <div class="text-sm text-muted-foreground">{{ phoneFormat(user?.phone) }}</div>
                           </div>
                        </div>
                        <div>
                           <h3 class="sm:text-base lg:text-xl font-bold">
                              Mening hisobim : <span class="text-green-500">{{ currencyFormat(user?.balance) }} UZS</span>
                           </h3>
                        </div>
                     </div>
                     <div class="p-1 border rounded-md bg-muted space-y-[2px]">
                        <NuxtLink
                           class="flex px-4 py-3 rounded-md hover:bg-foreground/5 transition-all text-base"
                           v-for="(item, i) in menu"
                           :key="i"
                           :to="item.path"
                           :class="{ 'bg-card hover:bg-card': item.path === currentRoute }"
                        >
                           {{ item.title }}
                        </NuxtLink>
                     </div>
                  </div>
               </div>
               <div class="md:col-span-4">
                  <div class="p-4 bg-card border rounded-md">
                     <slot />
                  </div>
               </div>
            </div>
         </div>
      </main>
      <AppFooter />
   </div>
</template>
