<script setup>
import HeroBanner from '@/components/pages/HeroBanner.vue';
import AppCounts from '@/components/pages/AppCounts.vue';
import CtaBanner from '@/components/pages/CtaBanner.vue';
import TestTypes from '@/components/pages/TestTypes.vue';
import AppFeatures from '@/components/pages/AppFeatures.vue';
import img1 from '../assets/images/5.jpg';
import img2 from '../assets/images/6.jpg';
import img3 from '../assets/images/7.jpg';
import img4 from '../assets/images/8.jpg';

const banners = [
   {
      name: 'Online test',
      title: 'Sizning vaqtingizga qarab moslashadi.',
      text: "Online test bo'limida siz xohlagan yo'nalishni tanlang va Testni Boshlash tugmasi bilan jarayonni ishga tushuring.",
      img: img2
   },
   {
      name: 'Blog test',
      title: "Ummumiy shakllangan ko'nikmalar sinovdan o'tkaziladi.",
      text: "Bo'limda qaysi fan yuzasidan test ishlamoqchi bo'lganingizni tanlang, testlar miqdorini belgilang va o'z darajangizni tekshiring.",
      order: true,
      img: img3
   },
   {
      name: "Maktab o'quvchilari uchun test",
      title: "O'quvchilar uchun maxsus testlar.",
      text: "Bu bo'limda o'quvchilar olgan bilim va ko'nikmalarini amalda mustahkamlab olishadi. O'rganing va bazadan foydalanib mustahkamlang.",
      img: img4
   },
   {
      name: 'Xalqaro tadqiqot testlari',
      title: "Bu bo'limda xalqaro darajada o'z o'rningizni egallang.",
      text: "Xalqaro tadqiqotlar bo'limi o'quvchi yoshlarni har 5 yilda PISA, PIRLSS, TIMSS testlaridan o'z bilimini tekshirish imkoniyatini beradi.",
      order: true,
      img: img1
   }
];
</script>

<template>
   <div>
      <HeroBanner />
      <AppCounts />
      <TestTypes />
      <div v-for="(banner, index) in banners" :key="index">
         <CtaBanner :name="banner.name" :title="banner.title" :text="banner.text" :img="banner.img" :order="banner.order" />
      </div>
      <AppFeatures />
   </div>
</template>
