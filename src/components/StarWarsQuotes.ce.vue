<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
import StarwarsQuotes from "./quotes.json";

interface Props {
  speed: number;
}

const entries = StarwarsQuotes;

const props = defineProps<Props>();

const currentItem = ref(0);

const carouselInterval = setInterval(() => {
  currentItem.value =
    currentItem.value < entries.length - 1 ? currentItem.value + 1 : 0;
}, props.speed);

onBeforeUnmount(() => clearInterval(carouselInterval));
</script>

<template>
  <blockquote
    v-for="({ id, text, author }, index) of entries"
    :key="id"
    v-show="currentItem === index"
  >
    <p>{{ text }}</p>
    <cite>{{ author }}</cite>
  </blockquote>
</template>

<style scoped>
blockquote {
  position: relative;
  padding-left: 1em;
  border-left: 0.2em solid #039be5;
  font-family: "Roboto", serif;
  font-size: 2.4em;
  line-height: 1.3em;
  font-weight: 100;
}

p {
  margin: 0;
  padding: 0;
}

p:before,
p:after {
  font-family: Calibri;
  color: #039be5;
  font-size: 34px;
}
p:before {
  content: "\201e";
}
p:after {
  content: "\201c";
}
cite {
  font-size: 50%;
  text-align: center;
  top: 50%;
}
cite:before {
  content: " \2015 ";
}
</style>
