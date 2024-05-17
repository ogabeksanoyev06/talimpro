<template>
   <div>
      <NuxtLoadingIndicator color="#000" :height="5" />
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
