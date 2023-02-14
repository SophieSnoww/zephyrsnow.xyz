<script setup>
import { reactive } from 'vue';

let state = reactive({
  images: [
    {
      artist: "sunservals",
      link: "sunservals01.png",
      loaded: false
    },
    {
      artist: "bagelcollie",
      link: "bagel01.png",
      loaded: false
    },
    {
      artist: "10nova_",
      link: "10nova_01.jpg",
      loaded: false
    },
    {
      artist: "cocadope",
      link: "coca01.png",
      loaded: false
    },
    {
      artist: "motheline",
      link: "motheline01.png",
      loaded: false
    },
    {
      artist: "nebularobo",
      link: "nebularobo01.gif",
      loaded: false
    }
  ]
});
</script>

<template>
  <div class="page-container">
    <div class="window xlarge tall">
      <div class="window-title">~/pics/</div>
      <div class="gallery">
        <RouterLink class="img-container" :to="`/gallery/${image.link.replace('.', '+')}`" v-for="image, index in state.images">
          <div class="artist-name">{{ image.artist }}</div>
          
          <div class="loading-stuff">
            <div class="loading-text">Loading...</div>
            <div class="loading-icon">
              <div class="square" v-for="i in 5" :style="{
                animationDelay: `${i * 0.025}s`
              }" />
            </div>
          </div>

          <img
            :src="image.link"
            alt=""
            @load="() => { state.images[index].loaded = true; }"
            :style="{
              opacity: image.loaded ? 1 : 0
            }"
          />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.window.xlarge.tall {
  min-height: unset;
  max-height: unset !important;
  height: unset !important;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* overflow-y: scroll; */
  /* height: 100%; */
  padding-bottom: 1em;
  gap: 25px;
}

.img-container {
  --size: 250px;
  width: var(--size);
  height: var(--size);
  overflow: hidden;
  border: 2px solid var(--fg);
  box-shadow: 5px 5px var(--fg);
  transition: 0.25s ease;
}

.img-container:hover {
  box-shadow: 10px 10px var(--fg);
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition: 0.25s ease;
  background-color: var(--bg);
}

.img-container:hover img {
  transform: scale(1.25);
}

.loading-stuff {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.loading-text {
  color: var(--fg);
}

.loading-icon {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.square {
  --size: 7em;
  position: absolute;
  width: var(--size);
  height: var(--size);
  border: 1px solid var(--fg);
  animation: rotate 2s ease infinite;
}

.artist-name {
  position: absolute;
  left: -100%;
  z-index: 1;
  transition: 0.25s ease;
  background-color: var(--fg);
  color: var(--bg);
  font-size: 2em;
  padding: 0.25em;
}

.img-container:hover .artist-name {
  left: 0
}

@media (max-width: 1100px) {
  .window {
    width: unset !important;
    min-width: unset !important;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
