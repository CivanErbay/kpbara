<template>
  <nav class="">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 font-inter relative"
      :class="{
        'overflow-hidden': !isMenuOpen,
        'overflow-visible ': isMenuOpen,
      }"
    >
      <a class="flex items-center space-x-3 rtl:space-x-reverse">
        <!-- <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        /> -->
        <span class="self-center text-2xl font-semibold whitespace-nowrap"
          >Sly.api</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="bg-gray-200/90 absolute z-50 md:translate-x-0 p-8 md:p-0 top-full md:top-auto inset-x-0 h-screen md:h-auto flex-col md:bg-transparent md:flex md:flex-row font-interlight items-center justify-center md:justify-end transition-all"
        :class="{
          'translate-x-[100vw]': !isMenuOpen,
          'translate-x-0': isMenuOpen,
        }"
      >
        <a
          href="#"
          class="block py-2 px-3 rounded md:bg-transparent"
          aria-current="page"
          >Features</a
        >
        <a class="block py-2 px-3 text-gray-900 md:border-0">Playground</a>
        <a href="#" class="block py-2 px-3 text-gray-900 md:border-0"
          >Über uns</a
        >
        <div class="flex flex-col md:flex-row">
          <nuxt-link
            to="/dashboard"
            href="#"
            class="flex items-center py-3 px-3 text-gray-900 md:border-0 font-interlight mr-3"
            ><img
              src="../assets/images/login.png"
              class="h-4 mr-3"
              alt="Login Logo"
            />Login</nuxt-link
          >
          <a
            href="#"
            class="block bg-[#288E7E] py-3 text-white w-fit px-5 rounded-3xl md:border-0"
            >DEMO ANFORDERN</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
