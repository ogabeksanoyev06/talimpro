<script setup>
const items = [
   {
      value: 'item-1',
      title: 'Qulay interfeys',
      content: "Oson, tushunarli va qulay interfeys orqali platforma imkoniyatlaridan to'liq foydalanishingiz mumkin"
   },
   {
      value: 'item-2',
      title: 'Malakali mutaxassislar',
      content: "Malakali mutaxassislar tomonidan tayyorlangan kurslar orqali o'z malakangizni oshiring. Yanada ko'proq bilimga ega bo'ling."
   },
   { value: 'item-3', title: 'Kasblar', content: "Kasbga yo'naltirilgan kurslarimizda 0 dan boshlab ishga tayyor bo'lib chiqing" }
];
</script>
<template>
   <section class="mt-8 md:mt-12 mb-10">
      <div class="container">
         <div class="space-y-2">
            <h1 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">Siz uchun yaratilgan qulayliklar</h1>
            <p class="text-sm text-muted-foreground max-w-[600px]">
               Platformamiz yuqori texnologiyalar zamonida taqdim qilinayotgan imkoniyatlardan unumli foydalanishga va vaqtingizni tejashga, o'zingizga qulay vaqtda malaka
               oshirishingizga yordam beradi.
            </p>
         </div>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div
               class="rounded-xl bg-card border-b-2 border-border dark:border-white p-3 md:p-6 transition-300 hover:shadow-card gap-2 md:gap-4"
               v-for="item in items"
               :key="item.value"
            >
               <div class="flex flex-col items-center gap-2">
                  <h3 class="text-xl font-medium w-full">{{ item.title }}</h3>
                  <p class="text-sm">
                     {{ item.content }}
                  </p>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>
