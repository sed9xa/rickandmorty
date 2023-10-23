<template>
  <div>{{ characters }}</div>
</template>

<script setup>
const { data: characters, pending, error, refresh } = await useAsyncData(
  "character",
  ({ $axios }) => {
    $axios.get("https://rickandmortyapi.com/api/character/").results;
  }
);
</script>

<style scoped></style>
