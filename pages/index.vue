<script setup>
import Carousel from "@/components/Carousel.vue";
import Movies from "@/components/Movies.vue";
import Cartoons from "@/components/Cartoons.vue";
</script>
<template>
  <div class="w-full h-auto bg-black pt-[60px]">
    <div class="">
      <Carousel />
    </div>
    <div class="h-auto">
      <Movies />
    </div>
    <div class="h-auto">
      <Cartoons />
    </div>
  </div>
</template>
