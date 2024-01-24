<script setup>
import Card from "./ui-components/Card.vue";
import Menu from "./ui-components/Menu.vue";

const movies = ref([
  {
    image_src:
      "https://w0.peakpx.com/wallpaper/290/713/HD-wallpaper-marvel-what-if-captain-carter-what-if-comics-multiverse-mcu-thumbnail.jpg",
    name: "Agarda...",
  },
  {
    image_src: "https://i.redd.it/kgqqxd7gxcla1.jpg",
    name: "Sharpalar saroyi",
  },
  {
    image_src:
      "https://cdn.cinematerial.com/p/297x/drg6x9qg/a-million-miles-away-movie-poster-md.jpg?v=1692112738",
    name: "Yerdan million chaqrim uzoqlikda",
  },
  {
    image_src:
      "https://m.media-amazon.com/images/M/MV5BMTA0MmNhNzUtZjVhNC00MmM5LWExYzYtZmQ0ZWEwZTIxMGExXkEyXkFqcGdeQXVyODMyNDEyNjM@._V1_FMjpg_UX1000_.jpg",
    name: "Sudraluvchilar",
  },
  {
    image_src:
      "https://cdn.cinematerial.com/p/297x/8j69zwf0/the-hunger-games-the-ballad-of-songbirds-and-snakes-movie-poster-md.jpg?v=1695215093",
    name: "Hayot mamot o'yinlari blah blah blah vlah nnjejejcejencjecnenc hello enckneknenenjcnj",
  },
  {
    image_src:
      "http://images.uzmovi.com/2023-07-30/13892dce9313557593d097b3bedc4242.jpg",
    name: "Openheimer",
  },
]);
</script>

<template>
  <div
    class="h-auto m-auto grid grid-cols-1 container gap-[15px] mt-[30px] place-content-center place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
  >
    <Card
      v-for="(movie, index) in movies"
      :key="index"
      :image_src="movie.image_src"
      :name="movie.name"
    />
    <Menu />
  </div>
</template>
