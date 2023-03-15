<script setup>
import { reactive } from 'vue';
import { RouterView } from 'vue-router';

const gridSize = 16;
const itemSize = 1.5;
const gridCount = 10;

let state = reactive({
  imageLoaded: false,
  sImage01Loaded: false,
  sImage02Loaded: false
});
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <div v-for="i in gridCount" class="grid" :style="{
    backgroundSize: `${itemSize}em ${itemSize}em`,
    width: `calc(${itemSize * gridSize}em + 1px)`,
    height: `calc(${itemSize}em + 1px)`,
    top: `calc(10vh - ${i * itemSize}em)`,
    left: `calc(70vw + ${i * itemSize}em)`,
    animationDelay: `${i * 0.05}s`
  }" />

  <div v-for="i in gridCount + 3" class="grid left" :style="{
    backgroundSize: `${itemSize}em ${itemSize}em`,
    width: `calc(${itemSize * gridSize}em + 1px)`,
    height: `calc(${itemSize}em + 1px)`,
    top: `calc(85vh + ${i * itemSize}em)`,
    left: `calc(15vw + ${i * itemSize}em)`,
    animationDelay: `${i * 0.05}s`
  }" />

  <div class="window nav-container">
    <div class="window-title">Navigate</div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/commissions">Commissions</RouterLink>
    <RouterLink to="/links">Links</RouterLink>
    <RouterLink to="/gallery">Gallery</RouterLink>
  </div>

  <div id="zeph-img-container" :style="{
    display: state.imageLoaded ? 'block' : 'none'
  }">
    <img src="/bagel01.png" alt="" id="zeph-img" @load="() => { state.imageLoaded = true; }" />
  </div>
  
  <!-- <div class="left-img img-container" :style="{
    display: state.sImage01Loaded ? 'block' : 'none'
  }">
    <img src="/sunservals02.5.png" id="zeph-img" alt="" @load="() => { state.sImage01Loaded = true; }">
  </div> -->
  
  <div class="right-img img-container" :style="{
    display: state.sImage02Loaded ? 'block' : 'none'
  }">
    <img src="/sunservals02.png" id="zeph-img" alt="" @load="() => { state.sImage02Loaded = true; }">
  </div>
</template>

<style scoped>
.grid {
  background: linear-gradient(var(--fg) 1px, transparent 1px), linear-gradient(to right, var(--fg) 1px, transparent 1px);
  background-size: 10px 10px;
  /* min-width: 151px;
  min-height: 151px; */
  position: absolute;
  transform: scale(0);
  animation: spin-in-right 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
}

.grid.left {
  animation: spin-in-left 3s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
}

.nav-container {
  position: absolute;
  top: 15vh;
  left: 70vw;
  width: calc(1.5em * 20) !important;
  min-height: 7em !important;
  min-height: unset;
  max-width: 90vw;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5em;
  z-index: 5;

  animation: fade-in 1s ease-out;

  transition: opacity 0.5s ease;
}

.nav-container * {
  font-size: 1.5em;
  text-decoration: none;
}

.img-container {
  position: absolute;
  animation: rotate-bounce 5s ease-in-out infinite;
}

.right-img {
  right: -3vw;
  bottom: 0vh;
  transition: 0.5s ease;
}

.img-container img {
  height: 60vh;
}
</style>
