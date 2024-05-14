<script setup>
const target = ref(null);
const { elementX, elementY, isOutside, elementHeight, elementWidth } = useMouseInElement(target);
const cardTransform = computed(() => {
   const MAX_ROTATION = 6;
   const rX = (MAX_ROTATION / 2 - (elementY.value / elementHeight.value) * MAX_ROTATION).toFixed(5);
   const rY = (MAX_ROTATION / 2 - (elementX.value / elementHeight.value) * MAX_ROTATION).toFixed(2);
   return isOutside.value ? '' : `perspective(${elementWidth.value}px) rotateX(${rX}deg) rotateY(${rY}deg)`;
});
const props = defineProps({
   title: String,
   name: String,
   text: String,
   img: String,
   order: {
      type: Boolean,
      default: false
   }
});
</script>

<template>
   <section class="mt-8 sm:mt-20">
      <div class="container">
         <div class="grid items-center grid-cols-1 md:grid-cols-2 gap-10" ref="target">
            <div :class="{ 'md:order-last': order }" class="flex flex-col space-y-4">
               <p class="text-2xl md:text-3xl lg:text-4xl font-semibold uppercase">
                  {{ props.name }}
               </p>
               <h5 class="text-xl font-bold">
                  {{ props.title }}
               </h5>
               <p class="text-base text-muted-foreground">
                  {{ props.text }}
               </p>
               <Button class="w-fit"> Test yechish </Button>
            </div>
            <div :class="order ? 'md:mr-auto' : 'md:ml-auto'" :style="{ transform: cardTransform, transition: 'transform .35s ease-out' }">
               <img :src="props.img" alt="" class="rounded max-w-full" />
            </div>
         </div>
      </div>
   </section>
</template>
