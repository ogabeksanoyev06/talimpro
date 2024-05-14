<template>
   <section class="min-h-[calc(100vh-var(--header-height))] flex items-center py-4">
      <div class="container">
         <div class="flex flex-col items-center gap-y-4 sm:gap-y-6">
            <div class="flex items-center gap-x-2 rounded-full border bg-muted px-3 py-1.5">
               <div class="w-3 h-3 bg-blue-600 rounded-full"></div>
               <div class="shrink-0 bg-border w-px mx-2 h-4"></div>
               <span class="text-xs sm:text-sm font-medium">Xush kelipsiz, Bilimdon</span>
            </div>
            <h1
               class="text-2xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl sm:leading-snug"
               style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: balance"
            >
               Bilim.uz orqali bilimingizni tez va oson oshiring.
            </h1>
            <span
               class="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
               style="display: inline-block; vertical-align: top; text-decoration: inherit; text-wrap: initial"
            >
               Bu platforma sizga test topshirish, sinovlarni o'tkazish va natijalarni o'rganish imkoniyatini beradi. Bu yerga kirishingiz bilan, sizning bilimingizni sinash va
               rivojlantirishga yordam beradigan qulay va samarali vositaga ega bo'lasiz.
            </span>
            <div class="flex w-full items-center flex-wrap justify-center gap-4 py-4 md:pb-10">
               <NuxtLink to="/choose-test">
                  <Button class="sm:px-8 h-10"> Test ishlash </Button>
               </NuxtLink>

               <NuxtLink to="/courses">
                  <Button class="sm:px-8 h-10" variant="outline"> Video kusrlar </Button>
               </NuxtLink>
            </div>
            <div>
               <a target="_blank" class="flex items-center px-4 py-2.5 rounded-full bg-muted/70 hover:bg-muted gap-x-3 transition-all ease-linear shadow-sm" href="#">
                  <img alt="sharh.commeta.uz" loading="lazy" width="24" height="24" src="/assets/svg/sharh.svg" />
                  <img alt="sharh.commeta.uz" loading="lazy" width="16" height="16" src="/assets/svg/star.svg" />
                  <span class="font-bold">4.9</span>
               </a>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup></script>
