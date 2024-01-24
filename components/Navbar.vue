<script setup>
import Logo from "./ui-components/Logo.vue";
import Menu from "./ui-components/Menu.vue";

const isOpen = ref(true);

const toggleHandler = () => {
  isOpen.value = !isOpen.value;
  console.log(isOpen);
};
</script>
<template>
  <div class="w-screen h-[60px] backdrop-blur bg-black/40 fixed z-50">
    <div
      class="w-[95%] h-full flex items-center justify-between m-auto container"
    >
      <div class="flex justify-between">
        <div class="company-logo-item">
          <Logo />
        </div>
        <div
          class="menu-items w-[200px] flex items-center justify-between ml-[50px]"
        >
          <ul
            class="hidden cursor-pointer justify-between w-full text-white sm:flex"
          >
            <li>Bosh sahifa</li>
            <li>Kategoriyalar</li>
          </ul>
        </div>
      </div>
      <div class="flex">
        <div
          @click="toggleHandler"
          class="search-button w-[40px] h-[40px] flex justify-center items-center hover:bg-gray-500 transition duration-400 rounded-md cursor-pointer sm:hidden"
        >
          <Icon name="uil:align-center-alt" class="text-2xl text-white" />
        </div>
        <div
          class="search-button w-[40px] h-[40px] flex justify-center items-center hover:bg-gray-500 transition duration-400 rounded-md cursor-pointer"
        >
          <Icon name="ic:baseline-search" class="text-2xl text-white" />
        </div>
      </div>
    </div>
    <Menu :isVisible="isOpen" />
  </div>
</template>
