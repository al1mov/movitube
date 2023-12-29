<template>
  <div class="w-[95%] m-auto container">
    <Carousel :autoplay="2000" :wrap-around="true" class="bg-white">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">{{ slide }}</div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { Carousel, Slide } from "vue3-carousel";
</script>
