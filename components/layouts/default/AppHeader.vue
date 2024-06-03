<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { Button } from '@/components/ui/button';
import { useRoute, useRouter } from 'vue-router';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from '@/components/ui/command';
import { useAuthStore } from '@/stores/AuthStore';
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const menu = [
   {
      name: 'Asosiy',
      route: '/',
      value: 'Asosiy'
   },

   {
      name: 'Testlar',
      route: '/choose-test',
      value: 'Testlar'
   },
   {
      name: 'Xalqaro tadqiqotlar',
      route: '/research-test',
      value: 'Xalqaro Testlar'
   },
   {
      name: 'Kurslar',
      route: '/courses',
      value: 'Kurslar'
   }
   // {
   //    name: 'Davlat OTMlari',
   //    route: '/courses',
   //    value: 'Kurslar'
   // }
];

const pages = [
   {
      name: 'DTM testlar',
      route: '/dtm-test',
      value: 'DTM testlar'
   },

   {
      name: 'Blog testlar',
      route: '/block-test',
      value: 'Blog testlar'
   },
   {
      name: 'Maktab o`quvchilari testlari',
      route: '/school-test',
      value: 'Maktab o`quvchilari testlari'
   },
   {
      name: 'PISA testlar',
      route: '/research-test',
      value: 'PISA testlar'
   },
   {
      name: 'PIRLS testlar',
      route: '/research-test',
      value: 'PIRLS testlar'
   },
   {
      name: 'TIMSS testlar',
      route: '/research-test',
      value: 'TIMSS testlar'
   },
   {
      name: 'Mening profilim',
      route: '/profile',
      value: 'Mening profilim'
   },
   {
      name: 'Mening natijalarim',
      route: '/profile/tests-results',
      value: 'Mening natijalarim'
   },
   {
      name: 'Hisobni to`ldirish',
      route: '/profile/top-up-balance',
      value: 'Hisobni to`ldirish'
   },
   {
      name: 'To`lovlar tarixi',
      route: '/profile/payment-history',
      value: 'To`lovlar tarixi'
   },
   {
      name: 'Mening kurslarim',
      route: '/profile/my-courses',
      value: 'Mening kurslarim'
   }
];

const authStore = useAuthStore();
const userStore = useUserStore();

const { isAuthenticated } = storeToRefs(authStore);
const { user, fullNameInitial, loading } = storeToRefs(userStore);

const open = ref(false);

const route = useRoute();
const router = useRouter();

const colorMode = useColorMode();
const isDark = computed({
   get() {
      return colorMode.value === 'dark';
   },
   set() {
      colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
   }
});

function handleOpenChange() {
   open.value = !open.value;
}

function goToLink(route) {
   router.push({ path: route });
}
onMounted(async () => {
   if (isAuthenticated.value) {
      await userStore.fetchUser();
   }
});
</script>

<template>
   <header class="bg-background/75 backdrop-blur border-b border-border -mb-px sticky top-0 z-50">
      <div class="container flex items-center justify-between gap-3 h-[--header-height]">
         <Sheet>
            <SheetTrigger class="w-10 h-10 flex-shrink-0 border rounded-full bg-secondary hover:bg-secondary/80 flex lg:hidden justify-center items-center cursor-pointer">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  font-size="24"
                  class="iconify iconify--material-symbols"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
               >
                  <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path>
               </svg>
            </SheetTrigger>
            <SheetContent :side="'right'" class="flex flex-col gap-y-8">
               <div class="flex justify-center mt-2">
                  <NuxtLink to="/">
                     <img alt="logo" fetchpriority="high" height="40" width="150" src="/assets/svg/logo-light.svg" v-if="colorMode.preference === 'light'" />
                     <img alt="logo" fetchpriority="high" height="40" width="150" src="/assets/svg/logo-dark.svg" v-if="colorMode.preference === 'dark'" />
                  </NuxtLink>
               </div>
               <nav class="flex flex-col rounded-md bg-muted p-1">
                  <NuxtLink
                     class="rounded-md px-4 py-2 hover:bg-foreground/5"
                     v-for="(item, index) in menu"
                     :key="index"
                     :to="item.route"
                     :class="{ 'bg-card hover:!bg-card ': item.route === route.path }"
                  >
                     {{ item.name }}
                  </NuxtLink>
               </nav>
               <NuxtLink to="/auth/login" v-if="!isAuthenticated">
                  <Button class="w-full rounded-full">Tizimga kirish</Button>
               </NuxtLink>
            </SheetContent>
         </Sheet>

         <div class="mr-4 lg:mr-1 hidden lg:flex lg:flex-1">
            <NuxtLink to="/" class="flex items-center gap-x-4">
               <img alt="logo" fetchpriority="high" height="40" width="120" src="/assets/svg/logo-light.svg" v-if="colorMode.preference === 'light'" />
               <img alt="logo" fetchpriority="high" height="40" width="120" src="/assets/svg/logo-dark.svg" v-if="colorMode.preference === 'dark'" />
            </NuxtLink>
            <div class="flex-1 justify-center flex whitespace-nowrap">
               <nav class="flex p-1 rounded-full bg-muted shadow">
                  <NuxtLink
                     v-for="(item, index) in menu"
                     :key="index"
                     :to="{ path: item.route }"
                     class="px-8 py-2 text-base rounded-full hover:bg-foreground/5"
                     :class="{ 'bg-card hover:!bg-card ': item.route === route.path }"
                  >
                     {{ item.name }}
                  </NuxtLink>
               </nav>
            </div>
         </div>
         <div class="flex items-center flex-1 md:flex-none justify-between space-x-2 md:justify-end">
            <div class="w-full flex-1 md:w-auto md:flex-none">
               <Button
                  variant="outline"
                  class="relative flex md:hidden h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
                  @click="handleOpenChange"
               >
                  <span class="inline-flex">Tezkor qidiruv...</span>
               </Button>
            </div>
            <nav class="flex items-center">
               <Button variant="ghost" size="icon" class="hidden md:flex" @click="handleOpenChange">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     class="lucide lucide-search w-5 h-5"
                  >
                     <circle cx="11" cy="11" r="8" />
                     <path d="m21 21-4.3-4.3" />
                  </svg>
               </Button>
               <div class="group relative flex cursor-pointer items-center justify-center" @click="isDark = !isDark">
                  <Button variant="ghost" size="icon" class="absolute">
                     <svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="w-5 h-5 text-foreground rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100">
                        <path
                           fill="currentColor"
                           fill-rule="evenodd"
                           d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                           clip-rule="evenodd"
                        ></path>
                     </svg>
                  </Button>
                  <Button variant="ghost" size="icon">
                     <svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="w-5 h-5 text-foreground rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
                        <path
                           fill="currentColor"
                           fill-rule="evenodd"
                           d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9"
                           clip-rule="evenodd"
                        ></path>
                     </svg>
                  </Button>
               </div>
               <NuxtLink to="/auth/login" v-if="!isAuthenticated">
                  <Button variant="ghost" size="icon">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-log-in w-5 h-5"
                     >
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                        <polyline points="10 17 15 12 10 7" />
                        <line x1="15" x2="3" y1="12" y2="12" />
                     </svg>
                  </Button>
               </NuxtLink>
               <DropdownMenu v-if="isAuthenticated">
                  <DropdownMenuTrigger>
                     <div
                        class="relative ml-1 overflow-hidden shrink-0 before:border before:border-solid before:border-white before:opacity-20 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full cursor-pointer"
                     >
                        <div class="rounded-full relative">
                           <div
                              class="relative overflow-hidden shrink-0 before:border before:border-solid before:border-black/10 before:absolute before:inset-0 w-10 h-10 rounded-full before:rounded-full"
                           >
                              <div class="flex items-center justify-center text-card h-full w-full text-base object-cover bg-primary" v-if="!user?.photo">
                                 {{ fullNameInitial }}
                              </div>
                              <div class="w-full h-full object-cover bg-white" v-else>
                                 <img alt="avatar-image" class="object-cover w-full h-full" :src="user?.photo" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" class="whitespace-nowrap mt-3 w-48">
                     <nuxt-link :to="{ path: '/profile' }">
                        <DropdownMenuItem class="flex cursor-pointer items-center gap-x-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                              <g fill="currentColor">
                                 <path d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity="0.2" />
                                 <path
                                    d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
                                 />
                              </g>
                           </svg>
                           Mening profilim
                        </DropdownMenuItem>
                     </nuxt-link>
                     <nuxt-link :to="{ path: '/profile/top-up-balance' }">
                        <DropdownMenuItem class="cursor-pointer">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-credit-card-icon mr-2 h-4 w-4"
                           >
                              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                              <line x1="2" x2="22" y1="10" y2="10"></line>
                           </svg>
                           Hisobni to'ldirish
                        </DropdownMenuItem>
                     </nuxt-link>
                     <nuxt-link :to="{ path: '/profile/my-courses' }">
                        <DropdownMenuItem class="flex cursor-pointer items-center gap-x-2">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlns:xlink="http://www.w3.org/1999/xlink"
                              aria-hidden="true"
                              role="img"
                              font-size="16"
                              class="iconify iconify--ph"
                              width="1em"
                              height="1em"
                              viewBox="0 0 256 256"
                           >
                              <g fill="currentColor">
                                 <path
                                    d="M232 80v88.89a7.11 7.11 0 0 1-7.11 7.11H200v-64a8 8 0 0 0-8-8h-72L90.13 81.6a8 8 0 0 0-4.8-1.6H64V56a8 8 0 0 1 8-8h45.33a8 8 0 0 1 4.8 1.6L152 72h72a8 8 0 0 1 8 8"
                                    opacity=".2"
                                 ></path>
                                 <path
                                    d="M224 64h-69.33l-27.74-20.8a16.12 16.12 0 0 0-9.6-3.2H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h152.89A15.13 15.13 0 0 0 208 200.89V184h16.89A15.13 15.13 0 0 0 240 168.89V80a16 16 0 0 0-16-16m-32 136H40V88h45.33l29.87 22.4a8 8 0 0 0 4.8 1.6h72Zm32-32h-16v-56a16 16 0 0 0-16-16h-69.33L94.93 75.2a16.12 16.12 0 0 0-9.6-3.2H72V56h45.33l29.87 22.4A8 8 0 0 0 152 80h72Z"
                                 ></path>
                              </g>
                           </svg>
                           Mening kurslarim
                        </DropdownMenuItem>
                     </nuxt-link>
                     <nuxt-link :to="{ path: '/profile/tests-results' }">
                        <DropdownMenuItem class="flex cursor-pointer items-center gap-x-2">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="w-4 h-4"
                           >
                              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                           </svg>
                           Mening natijalarim
                        </DropdownMenuItem>
                     </nuxt-link>
                     <nuxt-link :to="{ path: '/profile/payment-history' }">
                        <DropdownMenuItem class="flex cursor-pointer items-center gap-x-2">
                           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                              <g fill="currentColor">
                                 <path
                                    d="M16 69.21v120c91.64-44.77 132.36 42.35 224-2.42v-120c-91.64 44.77-132.36-42.35-224 2.42M128 152a24 24 0 1 1 24-24a24 24 0 0 1-24 24"
                                    opacity="0.2"
                                 />
                                 <path
                                    d="M244.24 60a8 8 0 0 0-7.75-.4c-42.93 21-73.59 11.16-106 .78c-34-10.89-69.25-22.14-117.95 1.64A8 8 0 0 0 8 69.24v119.93a8 8 0 0 0 11.51 7.19c42.93-21 73.59-11.16 106.05-.78c19.24 6.15 38.84 12.42 61 12.42c17.09 0 35.73-3.72 56.91-14.06a8 8 0 0 0 4.49-7.18V66.83a8 8 0 0 0-3.72-6.83M232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32c-19.24-6.15-38.84-12.42-61-12.42a122 122 0 0 0-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09ZM128 96a32 32 0 1 0 32 32a32 32 0 0 0-32-32m0 48a16 16 0 1 1 16-16a16 16 0 0 1-16 16M56 96v48a8 8 0 0 1-16 0V96a8 8 0 1 1 16 0m144 64v-48a8 8 0 1 1 16 0v48a8 8 0 1 1-16 0"
                                 />
                              </g>
                           </svg>
                           To'lovlar tarixi
                        </DropdownMenuItem>
                     </nuxt-link>
                     <div class="-mx-1 my-1 h-px bg-muted"></div>
                     <DropdownMenuItem class="flex cursor-pointer items-center gap-x-2" @click="authStore.logout">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           xmlns:xlink="http://www.w3.org/1999/xlink"
                           aria-hidden="true"
                           role="img"
                           font-size="16"
                           class="text-destructive iconify iconify--lets-icons"
                           width="1em"
                           height="1em"
                           viewBox="0 0 24 24"
                        >
                           <defs>
                              <mask id="iconifyReact10">
                                 <g fill="none">
                                    <circle cx="6" cy="6" r="6" fill="#fff" fill-opacity=".25" transform="matrix(0 -1 -1 0 20 18)"></circle>
                                    <path stroke="silver" stroke-opacity=".25" stroke-width=".6" d="M7.7 12a6.3 6.3 0 1 1 12.6 0a6.3 6.3 0 0 1-12.6 0Z"></path>
                                    <path stroke="#fff" stroke-width="1.2" d="M8 18.928A8 8 0 1 0 8 5.072"></path>
                                    <path
                                       fill="#fff"
                                       d="m2 12l-.469-.375l-.3.375l.3.375zm9 .6a.6.6 0 1 0 0-1.2zM5.531 6.625l-4 5l.938.75l4-5zm-4 5.75l4 5l.938-.75l-4-5zM2 12.6h9v-1.2H2z"
                                    ></path>
                                 </g>
                              </mask>
                           </defs>
                           <path fill="currentColor" d="M0 0h24v24H0z" mask="url(#iconifyReact10)"></path>
                        </svg>
                        <span class="text-destructive">Chiqish</span>
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </nav>
            <CommandDialog v-model:open="open">
               <CommandInput placeholder="Kerakli bo'limni qidiring..." />
               <CommandList>
                  <CommandEmpty>Natijalar topilmadi.</CommandEmpty>
                  <CommandGroup heading="Linklar">
                     <CommandItem v-for="(item, index) in menu" :key="index" :value="item.value" class="py-3 cursor-pointer" @click="goToLink(item.route), (open = false)">
                        <svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="mr-2 h-4 w-4">
                           <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M3.5 2a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V6H8.5a.5.5 0 0 1-.5-.5V2zm5.5.707L11.293 5H9zM2 2.5A1.5 1.5 0 0 1 3.5 1h5a.5.5 0 0 1 .354.146l4 4A.5.5 0 0 1 13 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 2 12.5z"
                              clip-rule="evenodd"
                           ></path>
                        </svg>
                        <span> {{ item.name }}</span>
                     </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Sahifalar">
                     <CommandItem v-for="(item, index) in pages" :key="index" :value="item.value" class="py-3 cursor-pointer" @click="goToLink(item.route), (open = false)">
                        <svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="mr-2 h-4 w-4">
                           <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0M7.5 1.827a5.673 5.673 0 1 0 0 11.346a5.673 5.673 0 0 0 0-11.346"
                              clip-rule="evenodd"
                           ></path>
                        </svg>
                        <span> {{ item.name }}</span>
                     </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Mavzu">
                     <CommandItem value="light" class="cursor-pointer py-3" @click="(colorMode.preference = 'light'), (open = false)">
                        <svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="mr-2 h-4 w-4">
                           <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5M2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707M.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0M12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0M8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707M5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                              clip-rule="evenodd"
                           ></path>
                        </svg>
                        <span> Kungi regim</span>
                     </CommandItem>
                     <CommandItem value="dark" class="cursor-pointer py-3" @click="(colorMode.preference = 'dark'), (open = false)">
                        <svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="mr-2 h-4 w-4">
                           <path
                              fill="currentColor"
                              fill-rule="evenodd"
                              d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4A6.57 6.57 0 0 1 9.203 5.1a6.602 6.602 0 0 1-6.243 6.59c-.214.012-.333.264-.183.417a6.8 6.8 0 0 0 .21.206l.072.066l.26.226l.188.148l.121.09l.187.131l.176.115c.12.076.244.149.37.217l.264.135l.26.12l.303.122l.244.086a6.568 6.568 0 0 0 1.103.26l.317.04l.267.02a6.6 6.6 0 0 0 6.943-7.328l-.037-.277a6.557 6.557 0 0 0-.384-1.415l-.113-.268l-.077-.166l-.074-.148a6.602 6.602 0 0 0-.546-.883l-.153-.2l-.199-.24l-.163-.18l-.12-.124l-.16-.158l-.223-.2l-.32-.26l-.245-.177l-.292-.19l-.321-.186l-.328-.165l-.113-.052l-.24-.101l-.276-.104l-.252-.082l-.325-.09l-.265-.06zm1.86 4.318a7.578 7.578 0 0 0-.572-2.894a5.601 5.601 0 1 1-4.748 10.146a7.61 7.61 0 0 0 3.66-2.51a.749.749 0 0 0 1.355-.442a.75.75 0 0 0-.584-.732c.062-.116.122-.235.178-.355A1.25 1.25 0 1 0 10.35 6.2c.034-.295.052-.595.052-.9"
                              clip-rule="evenodd"
                           ></path>
                        </svg>
                        <span> Tungi rejim</span>
                     </CommandItem>
                  </CommandGroup>
               </CommandList>
            </CommandDialog>
         </div>
      </div>
   </header>
</template>
