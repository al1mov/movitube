<script setup>
// import
import Navbar from "@/components/Navbar.vue";

useSeoMeta({
  title: "Zamonaviy kinoteatr | Movitube",
  ogTitle: "Zamonaviy kinoteatr | Movitube",
  description: "Movitube yuqori sifatli, tezkor, zamonaviy kinoteatr!",
  ogDescription: "Movitube yuqori sifatli, tezkor, zamonaviy kinoteatr!",
  ogImage: "https://i.ibb.co/FJ22QK8/custom-fav.jpg",
});
</script>
<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <div class="navbar">
      <Navbar />
    </div>
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Rethink+Sans:wght@500&display=swap");
* {
  font-family: "Inter", sans-serif;
  font-family: "Rethink Sans", sans-serif;
  /* -webkit-tap-highlight-color: transparent; */
}
</style>
