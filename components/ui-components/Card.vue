<script setup>
const props = defineProps({
  image_src: String,
  name: String,
});
</script>

<template>
  <div class="w-auto h-auto top-0">
    <div class="card-image">
      <img
        loading="lazy"
        :src="image_src"
        :alt="{ name }"
        class="w-[250px] h-[360px] rounded-md object-cover sm:w-[200px] sm:h-[260px]"
      />
    </div>
    <div class="card-title text-white w-[200px] text-md h-auto">
      {{ new String(name).slice(0, 50) }}
    </div>
  </div>
</template>
