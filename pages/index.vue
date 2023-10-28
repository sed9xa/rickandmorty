<template>
  <div class="character-cards">
    <character-card
      class="character-card"
      v-for="character in characters.results"
      :key="character.id"
      :link="character.id"
      :title="character.name"
      :imageUrl="character.image"
      :episode="character.episode"
    ></character-card>
  </div>
</template>

<script setup>
const charactersStore = useStore();
const axios = useAxios();

const { data: characters } = await useAsyncData("character", async () => {
  let characters = await charactersStore.fetchFilteredCharacters();
  return characters;
});
onMounted(async () => {
  console.log(characters);
});
</script>

<style scoped>
body {
  background-image: url("https://sun9-80.userapi.com/impg/qUZsZ1-vt78IlFqaYE_G8hgneQkgiVVcLxqmNw/Dv5Ww-lT9EU.jpg?size=807x454&quality=96&sign=3135296b7958c09768c5ebffe2cab55e&c_uniq_tag=NyxEiek_5lf90tjNxXXa-8lvyUPPh4Yv500SD8eosKM&type=album");
}
.character-cards {
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}
.character-card {
  border-radius: 10px;
}
</style>
