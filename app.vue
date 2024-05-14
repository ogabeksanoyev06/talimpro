<script setup></script>

<template>
   <div>
      <NuxtLoadingIndicator color="#000" />
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
      <Toaster position="top-right" richColors closeButton />
   </div>
</template>

<style>
.nuxt-loading-indicator {
   opacity: 1 !important;
}
</style>
