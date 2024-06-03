<template>
   <footer class="bg-card pt-10 border-t border-border/60">
      <div class="container">
         <div class="xl:grid xl:grid-cols-9 xl:gap-8">
            <div class="flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-4">
               <div>
                  <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">Testlar</h3>
                  <nav class="mt-6 space-y-4 flex flex-col">
                     <NuxtLink to="/choose-test" class="text-sm transition-colors hover:text-foreground/80 text-foreground/60 font-medium cursor-pointer"> Dtm testlari </NuxtLink>
                     <NuxtLink to="/choose-test" class="text-sm transition-colors hover:text-foreground/80 text-foreground/60 font-medium cursor-pointer"> Blog testlar </NuxtLink>
                     <NuxtLink to="/choose-test" class="text-sm transition-colors hover:text-foreground/80 text-foreground/60 font-medium cursor-pointer">
                        Maktab o'quvchilari uchun testlar
                     </NuxtLink>
                     <NuxtLink to="/research-test" class="text-sm transition-colors hover:text-foreground/80 text-foreground/60 font-medium cursor-pointer">
                        Xalqaro tadqiqot testlari
                     </NuxtLink>
                  </nav>
               </div>
               <div>
                  <h3 class="text-sm/6 font-semibold text-gray-900 dark:text-white">Kurslar</h3>
                  <nav class="mt-6 space-y-4 flex flex-col">
                     <NuxtLink to="/courses" class="text-sm transition-colors hover:text-foreground/80 text-foreground/60 font-medium">Barcha kurslar </NuxtLink>
                  </nav>
               </div>
            </div>
            <div class="mt-10 xl:mt-0 col-span-5">
               <div class="flex flex-col gap-3 col-span-6">
                  <NuxtLink to="/" class="flex items-center gap-x-4">
                     <img alt="logo" fetchpriority="high" height="40" src="/assets/svg/logo-light.svg" v-if="$colorMode.preference === 'light'" />
                     <img alt="logo" fetchpriority="high" height="40" src="/assets/svg/logo-dark.svg" v-if="$colorMode.preference === 'dark'" />
                  </NuxtLink>
                  <p class="text-sm leading-relaxed mt-4">
                     Bizning platformamiz orqali siz Xalqaro tajribaga ega mutaxassislar bilan birga zamonaviy kurslarni o'rganishni boshlang va davlat test standartlari asosida
                     tuzilgan testlardan foydalanib o'z bilimingizni sinab ko'ring.
                  </p>
                  <div class="hidden lg:flex items-center gap-3">
                     <a href="https://t.me/Talim_Pro" class="group relative w-10 h-10 flex items-center justify-center" target="_blank">
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
                           class="lucide lucide-send"
                        >
                           <path d="m22 2-7 20-4-9-9-4Z" />
                           <path d="M22 2 11 13" />
                        </svg>
                        <div
                           class="absolute top-0 -translate-y-full opacity-0 bg-secondary-foreground text-card z-[10000000] text-xs py-1 px-2 rounded pointer-events-none group-hover:opacity-100 group-hover:-top-2 after:absolute after:w-2.5 after:h-2.5 after:z-[-1] after:rotate-45 after:bg-secondary-foreground transition-all duration-300 w-max max-w-[200px] text-center -translate-x-1/2 left-1/2 after:left-1/2 after:-translate-x-1/2 after:-bottom-1"
                        >
                           <span class="relative font-sans">Telegram</span>
                        </div>
                     </a>
                     <a href="" class="group relative w-10 h-10 flex items-center justify-center" target="_blank">
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
                           class="lucide lucide-instagram"
                        >
                           <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                           <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                           <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        <div
                           class="absolute top-0 z-[1000000000] -translate-y-full opacity-0 bg-secondary-foreground text-card text-xs py-1 px-2 rounded pointer-events-none group-hover:opacity-100 group-hover:-top-2 after:absolute after:w-2.5 after:h-2.5 after:rotate-45 after:bg-secondary-foreground transition-all duration-300 w-max max-w-[200px] text-center -translate-x-1/2 left-1/2 after:left-1/2 after:-translate-x-1/2 after:-bottom-1"
                        >
                           <span class="relative font-sans">Instagram</span>
                        </div>
                     </a>
                     <a href="" class="group relative w-10 h-10 flex items-center justify-center" target="_blank">
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
                           class="lucide lucide-youtube"
                        >
                           <path
                              d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                           />
                           <path d="m10 15 5-3-5-3z" />
                        </svg>
                        <div
                           class="absolute top-0 z-[1000000000] -translate-y-full opacity-0 bg-secondary-foreground text-card text-xs py-1 px-2 rounded pointer-events-none group-hover:opacity-100 group-hover:-top-2 after:absolute after:w-2.5 after:h-2.5 after:rotate-45 after:bg-secondary-foreground transition-all duration-300 w-max max-w-[200px] text-center -translate-x-1/2 left-1/2 after:left-1/2 after:-translate-x-1/2 after:-bottom-1"
                        >
                           <span class="relative font-sans">YouTube</span>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="mt-8 border-t border-border/60">
         <div class="container lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3 !py-6">
            <div class="lg:flex-1 lg:hidden flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3">
               <a href="https://t.me/Talim_Pro" class="group relative w-10 h-10 flex items-center justify-center" target="_blank">
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
                     class="lucide lucide-send"
                  >
                     <path d="m22 2-7 20-4-9-9-4Z" />
                     <path d="M22 2 11 13" />
                  </svg>
                  <div
                     class="absolute top-0 -translate-y-full opacity-0 bg-secondary-foreground text-card z-[10000000] text-xs py-1 px-2 rounded pointer-events-none group-hover:opacity-100 group-hover:-top-2 after:absolute after:w-2.5 after:h-2.5 after:z-[-1] after:rotate-45 after:bg-secondary-foreground transition-all duration-300 w-max max-w-[200px] text-center -translate-x-1/2 left-1/2 after:left-1/2 after:-translate-x-1/2 after:-bottom-1"
                  >
                     <span class="relative font-sans">Telegram</span>
                  </div>
               </a>
               <a href="" class="group relative w-10 h-10 flex items-center justify-center" target="_blank">
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
                     class="lucide lucide-instagram"
                  >
                     <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                     <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                     <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <div
                     class="absolute top-0 z-[1000000000] -translate-y-full opacity-0 bg-secondary-foreground text-card text-xs py-1 px-2 rounded pointer-events-none group-hover:opacity-100 group-hover:-top-2 after:absolute after:w-2.5 after:h-2.5 after:rotate-45 after:bg-secondary-foreground transition-all duration-300 w-max max-w-[200px] text-center -translate-x-1/2 left-1/2 after:left-1/2 after:-translate-x-1/2 after:-bottom-1"
                  >
                     <span class="relative font-sans">Instagram</span>
                  </div>
               </a>
               <a href="" class="group relative w-10 h-10 flex items-center justify-center" target="_blank">
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
                     class="lucide lucide-youtube"
                  >
                     <path
                        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                     />
                     <path d="m10 15 5-3-5-3z" />
                  </svg>
                  <div
                     class="absolute top-0 z-[1000000000] -translate-y-full opacity-0 bg-secondary-foreground text-card text-xs py-1 px-2 rounded pointer-events-none group-hover:opacity-100 group-hover:-top-2 after:absolute after:w-2.5 after:h-2.5 after:rotate-45 after:bg-secondary-foreground transition-all duration-300 w-max max-w-[200px] text-center -translate-x-1/2 left-1/2 after:left-1/2 after:-translate-x-1/2 after:-bottom-1"
                  >
                     <span class="relative font-sans">YouTube</span>
                  </div>
               </a>
            </div>
            <div class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1">
               <p class="text-sm text-center">© 2024. Ta'limPro. Barcha huquqlar himoyalangan.</p>
            </div>
         </div>
      </div>
   </footer>
</template>

<script setup></script>
