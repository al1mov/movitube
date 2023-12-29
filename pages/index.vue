<script>
import Navbar from "@/components/Navbar.vue";
import Carousel from "@/components/Carousel.vue";
import Movies from "@/components/Movies.vue";
</script>
<template>
  <div class="w-full h-auto bg-black">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="w-full h-[90%] items-center">
      <Carousel />
    </div>
    <div class="h-auto">
      <Movies />
    </div>
  </div>
</template>
