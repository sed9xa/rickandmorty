<template>
  <div class="container">
    <div class="character-card" ref="card">
      <div @click.prevent="()=>{card.style.transform = 'rotateY(180deg)'}" class="side front" :style="styleObject">
        <h1 class="front__title">{{ title }}</h1>
      </div>
      <div @click="()=>{card.style.transform = 'rotateY(0deg)'}" class="side back">
        <h2 class="back__title">Список эпизодов</h2>
        <ul class="episodes">
          <li class="episodes-item">wqe</li>
        </ul>
        <nuxt-link class="back__link" to = ''>Подробная информация</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
const card = ref(null);
function qwe(card) {
  card.style.transform = "rotateY(180deg)";
  console.log(card.style);
}
const props = defineProps({
  link: String,
  title: String,
  imageUrl: String,
  episode: Array,
});
const styleObject = reactive({
  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.35), transparent), url('${props.imageUrl}')`,
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");

.container {
  perspective: 1000px;
}
.character-card {
  width: 300px;
  height: 500px;
  position: relative;
  transform-style: preserve-3d;
  font-size: 30px;
  font-weight: bold;
  transition: 1s;
  cursor: pointer;
}
.side {
  width: 100%;
  height: 100%;
  color: #ffffff;
  background: rgb(9, 190, 9);
  position: absolute;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  border-radius: 15px;
  font-family: "Roboto Condensed", sans-serif;
}
.front {
  transition: .5s;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.5);
  background: center / cover no-repeat;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.35), transparent),
    url("https://images.thedirect.com/media/article_full/rick1.jpg");
}
.front__title {
  margin-top: auto;
  width: 100%;
  font-size: 4rem;
  text-align: center;
  color: white;
}
.back {
  transform: rotateY(180deg) translateZ(1px);
  padding: 15px;
}
.back__title {
  width: 100%;
  margin-bottom: auto;
  text-align: center;
}
.back__link {
  margin-top: auto;
}
/* .card-image{
  width: 100%;
} */
.front:hover {
  -webkit-box-shadow: 4px 4px 20px 0px rgb(90, 82, 82);
  -moz-box-shadow: 4px 4px 20px 0px rgb(90, 82, 82);
  box-shadow: 4px 4px 20px 0px rgb(90, 82, 82);
}
</style>
