<script setup>
import { Carousel, Slide } from "vue3-carousel";
</script>

<template>
  <div class="w-[95%] m-auto container h-[500px]">
    <Carousel
      :autoplay="2000"
      :wrap-around="true"
      class="bg-white h-full rounded-2xl"
    >
      <Slide v-for="slide in 10" :key="slide">
        <div class="w-full h-full">
          <div class="text-content">{{ slide }}</div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
