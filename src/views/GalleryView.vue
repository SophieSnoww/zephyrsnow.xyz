<script setup>
const images = [
  {
    artist: "sunservals",
    link: "sunservals01.png"
  },
  {
    artist: "bagelcollie",
    link: "bagel01.png"
  },
  {
    artist: "10nova_",
    link: "10nova_01.jpg"
  },
  {
    artist: "cocadope",
    link: "coca01.png"
  },
  {
    artist: "motheline",
    link: "motheline01.png"
  },
  {
    artist: "nebularobo",
    link: "nebularobo01.gif"
  }
];
</script>

<template>
  <div class="page-container">
    <div class="window xlarge tall">
      <div class="window-title">~/pics/</div>
      <div class="gallery">
        <RouterLink class="img-container" :to="`/gallery/${image.link.replace('.', '+')}`" v-for="image in images">
          <div class="artist-name">{{ image.artist }}</div>
          <img :src="image.link" alt="">
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.window.xlarge.tall {
  max-height: 85vh;
  height: unset;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: scroll;
  height: 100%;
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

@media (max-width: 1000px) {
  .window {
    width: unset !important;
    min-width: unset !important;
  }
}

@media (max-width: 700px) {
  .window {
    width: min-content !important;
  }
}

@media (max-width: 600px) {
  .window {
    margin-top: 10em;
    height: 80vh !important;
  }
}
</style>
