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
        :src="image_src"
        :alt="{ name }"
        class="w-[200px] h-[260px] rounded-md object-cover"
      />
    </div>
    <div class="card-title text-white mt-[10px]">{{ name }}</div>
  </div>
</template>
