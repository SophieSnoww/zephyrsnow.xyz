<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

let state = reactive({
  info: {}
});

const route = useRoute();

axios.get(`/${route.params.imageName.replace('+', '.')}.json`).then((resp) => {
  state.info = resp.data;
});
</script>

<template>
  <div class="page-container">
    <div class="window xlarge xtall">
      <div class="window-title">~/pics/{{ $route.params.imageName.replace("+", ".") }}</div>
      <RouterLink to="/gallery" class="back-button"><span class="material-icons">arrow_back</span> Back</RouterLink>
      <div class="image-container">
        <img :src="`/${$route.params.imageName.replace('+', '.')}`" alt="" :style="{
          imageRendering: state.info.imageRendering || 'unset'
        }">
        <div class="image-info">
          <div class="artist-name">by {{ state.info.artist }}</div>
          <div class="artist-links" v-if="state.info.links.length > 0">
            <a v-for="link in state.info.links" target="_blank" :href="link.link" class="artist-link">{{ link.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.back-button {
  font-size: 1.5em;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 0.5em;
}

.image-container {
  /* width: 100%; */
  height: 100%;
  max-height: 85vh;
}

.image-info {
  position: absolute;
  top: 0;
  left: 0;
  margin: 1em;
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5em;
}

.artist-links {
  display: flex;
  flex-direction: column;
}

.artist-link {
  color: var(--bg);
}

.image-info > * {
  background-color: var(--fg);
  color: var(--bg);
  padding: 0.5em 2em;
}

.image-container img {
  width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
