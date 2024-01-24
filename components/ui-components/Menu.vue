<script setup>
defineProps({
  isVisible: Boolean,
});

const isOpen = ref(true);
</script>

<template>
  <div class="card flex justify-center" v-if="isOpen">
    <!-- <Button label="Show" icon="pi pi-external-link" @click="visible = true" /> -->
    <Dialog
      modal
      header="Menu"
      class="w-[85%] backdrop-blur-3xl bg-black/40 rounded-md p-5 text-white text-lg"
    >
      <ul
        class="w-full flex flex-col cursor-pointer items-center text-white text-lg"
      >
        <li>Bosh sahifa</li>
        <li>Kategoriyalar</li>
      </ul>
    </Dialog>
  </div>
</template>
