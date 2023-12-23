<script setup>
import Logo from "./ui-components/Logo.vue";
</script>
<template>
  <div
    class="w-screen h-[60px] bg-gray-900 backdrop-blur-lg flex items-center justify-between fixed flex-row z-50"
  >
    <div
      class="w-[95%] h-full container flex items-center justify-between m-auto"
    >
      <div class="flex justify-between">
        <div class="company-logo-item">
          <Logo />
        </div>
        <div
          class="menu-items w-[200px] flex items-center justify-between ml-[50px]"
        >
          <ul class="flex cursor-pointer justify-between w-full text-white">
            <li>Bosh sahifa</li>
            <li>Kategoriyalar</li>
          </ul>
        </div>
      </div>
      <div
        class="search-button w-[40px] h-[40px] flex justify-center items-center hover:bg-gray-500 transition duration-400 rounded-md cursor-pointer"
      >
        <Icon name="ic:baseline-search" class="text-2xl text-white" />
      </div>
    </div>
  </div>
</template>
