import { defineRule } from 'vee-validate';

export default defineNuxtPlugin(() => {
   defineRule('required', (value) => {
      if (!value || !value.length) {
         return "Maydon to'ldirilishi shart!";
      }
      return true;
   });

   defineRule('email', (value) => {
      if (!value || !value.length) {
         return true;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
         return "Email manzilning to'g'ri formatda bo'lishi kerak!";
      }

      const domain = value.split('@')[1];
      const allowedDomains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
      if (!allowedDomains.includes(domain)) {
         return 'Faqat gmail.com, yahoo.com, hotmail.com dominlariga ruxsat berilgan!';
      }

      return true;
   });

   defineRule('min', (value, [length]) => {
      if (!value || !value.length) {
         return true;
      }
      if (value.length < length) {
         return `Maydon kamida ${length} belgidan iborat bo'lishi kerak!`;
      }
      return true;
   });

   defineRule('max', (value, [length]) => {
      if (!value || !value.length) {
         return true;
      }
      if (value.length > length) {
         return `Maydon maksimum ${length} belgidan iborat bo'lishi kerak!`;
      }
      return true;
   });

   defineRule('phone', (value) => {
      if (!value || !value.length) {
         return true;
      }
      if (!/^\+?\d{9,}$/g.test(value)) {
         return "Telefon raqam to'g'ri formatda emas";
      }
      return true;
   });

   defineRule('passwordformat', (value) => {
      if (!value || !value.length) {
         return true;
      }
      const containsUpperCase = /[A-Z]/.test(value);
      const containsLowerCase = /[a-z]/.test(value);
      const containsNumber = /\d/.test(value);
      if (!containsUpperCase || !containsLowerCase || !containsNumber) {
         return "Parol bosh harf, kichik harf va raqamlardan iborat bo'lishi kerak!";
      }
      return true;
   });

   defineRule('confirmed', (value, [target]) => {
      if (value === target) {
         return true;
      }
      return 'Parol mos kelmadi!';
   });
});
