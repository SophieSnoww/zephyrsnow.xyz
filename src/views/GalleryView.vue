<script setup>
const images = [
  {
    artist: "bagelcollie",
    link: "zeph.png"
  },
  {
    artist: "sunservals",
    link: "sunservals_pfp.png"
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
.gallery {
  display: flex;
  flex-wrap: wrap;
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
</style>
