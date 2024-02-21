<template>
  <div class="container">
    <div class="grid grid-cols-[200px_minmax(0,_1fr)] h-screen">
      <Sidebar
        @currentPage="
          (value) => {
            setPage(value);
          }
        "
      ></Sidebar>
      <div>
        <Accounts v-if="currentPage == 'Account'"></Accounts>
        <Billings v-if="currentPage == 'Billings'"></Billings>
        <Settings v-if="currentPage == 'Settings'"></Settings>
      </div>
    </div>
  </div>
</template>

<script setup>
const currentPage = ref("");

const setPage = (value) => {
  currentPage.value = value;
};
</script>
