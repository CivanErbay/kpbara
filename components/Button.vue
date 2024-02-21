<template>
  <button
    class="text-white hover:opacity-75 text-white font-bold py-2 rounded w-full text-left flex gap-2"
  >
    <slot></slot>
    {{ title }}
  </button>
</template>

<script setup>
const props = defineProps(["title"]);

onMounted(() => {});
</script>
