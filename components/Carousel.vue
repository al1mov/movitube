<template>
  <Carousel :autoplay="8000" :wrap-around="true" class="h-auto">
    <Slide v-for="slide in 2" :key="slide">
      <div class="carousel__item w-[95%] h-[65%] flex container relative">
        <div class="image_view w-full h-full">
          <div class="w-full h-full">
            <img
              src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/pv-target-images/02f8f53c44a133161e61c8fb92d80ffefb4c5df2116333c41bd97f5ade427821._UR1920,1080_SX720_FMjpg_.jpg"
              class="w-full h-full object-cover object-top rounded-xl"
              alt="marvel image"
            />
          </div>
        </div>
        <div
          class="title-widget absolute p-[20px] bottom-[10%] left-[5%] w-[40%] backdrop-blur-xl rounded-2xl items-center flex justify-center flex-col"
        >
          <div class="movie-name">
            <div
              class="text-white text-4xl pb-[20px] max-w-[800px] whitespace-nowrap overflow-hidden text-ellipsis"
            >
              Elemental
            </div>
          </div>
          <div class="genre-type text-2xl">
            <div>
              <span class="text-slate-900 outline-white">Janr: </span>
              <span class="text-bold text-white">Sarguzasht</span>
            </div>
          </div>
          <div class="link-btn">
            <div
              class="bg-white w-[80px] h-[35px] flex justify-center items-center cursor-pointer rounded-lg hover:bg-gray-300 mt-[20px] transition duration-500"
            >
              Ko'rish
            </div>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
import { Carousel, Slide } from "vue3-carousel";
</script>
