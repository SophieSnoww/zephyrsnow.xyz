<script setup>
import { reactive } from 'vue';

let state = reactive({
  thumbnail: {
    image: '',
    title: 'Title',
    artist: 'Arist',
    titleSize: 2.5,
    artistSize: 1.5
  }
});


function uploadImage (e) {
  const image = e.target.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(image);

  reader.onload = (e) => {
    state.thumbnail.image = e.target.result;
    console.log(e.target.result);
  }
}
</script>

<template>
  <div class="page-container">
    <div class="window xlarge">
      <h1>Youtube.Thumbnail.Utility</h1>
      <div class="thumbnail-util-container">
        <div class="thumbnail">
          <img :src="state.thumbnail.image" alt="" class="thumbnail-bg" />
          <img :src="state.thumbnail.image" alt="" class="thumbnail-image" />
          <div class="thumbnail-text">
            <div class="thumbnail-title" :style="{
              fontSize: `${state.thumbnail.titleSize}em`
            }">{{ state.thumbnail.title }}</div>
            <div class="thumbnail-artist" :style="{
              fontSize: `${state.thumbnail.artistSize}em`
            }">{{ state.thumbnail.artist }}</div>
          </div>
        </div>

        <div class="thumbnail-form">
          <input @change="uploadImage" type="file" accept="image/*" class="thumbnail-file-input" />
          <input v-model="state.thumbnail.title" type="text" class="thumbnail-text-input" />
          <input v-model="state.thumbnail.artist" type="text" class="thumbnail-text-input" />
          <input v-model="state.thumbnail.titleSize" type="range" min="0.1" max="5" step="0.1" />
          <input v-model="state.thumbnail.artistSize" type="range" min="0.1" max="5" step="0.1" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thumbnail-util-container {
  width: 100%;
  display: flex;
  gap: 1em;
}

.thumbnail {
  flex: 1 0;
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0px 10px;
}

.thumbnail-image {
  height: calc(100% - 30px);
  object-fit: cover;
  aspect-ratio: 1;
}

.thumbnail-text {
  flex: 1 0;
  display: flex;
  height: calc(100% - 30px);
  flex-direction: column;
  gap: 5px;
  color: #fff;
  font-family: verdana;
}

.thumbnail-title {
  font-weight: bold;
  padding-bottom: 5px;
  border-bottom: 2px solid #fff;
}

.thumbnail-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(10px) brightness(0.75);
  transform: scale(1.1);
}

.thumbnail-form {
  flex: 1 0;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.thumbnail-form * {
  font-family: unset !important;
}
</style>
