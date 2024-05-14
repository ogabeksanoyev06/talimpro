<script setup>
import AppHeader from '~/components/layouts/default/AppHeader.vue';
import AppFooter from '~/components/layouts/default/AppFooter.vue';
</script>

<template>
   <div class="relative flex min-h-screen flex-col bg-background">
      <AppHeader />
      <div class="flex-1">
         <main class="">
            <slot />
         </main>
      </div>
      <AppFooter />
   </div>
</template>
