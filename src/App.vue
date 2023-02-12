<script setup>
import { RouterView } from 'vue-router';

const gridSize = 16;
const itemSize = 1.5;
const gridCount = 8;
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <!-- <div class="window absolute flicker" :style="{
    animationDuration: `${(Math.random() * 15) + 3}s`,
    animationDelay: `-${Math.random() * 5}s`,
    left: `${Math.floor(Math.random() * 20) + 1}vw`,
    top: `${Math.floor(Math.random() * 33) + 1}vh`
  }" />
  <div v-if="Math.random() < 0.5" class="window absolute flicker" :style="{
    animationDuration: `${(Math.random() * 15) + 3}s`,
    animationDelay: `-${Math.random() * 5}s`,
    left: `${Math.floor(Math.random() * 20) + 1}vw`,
    top: `${Math.floor(Math.random() * 33) + 1}vh`
  }" />
  <div class="window absolute flicker" :style="{
    animationDuration: `${(Math.random() * 15) + 3}s`,
    animationDelay: `-${Math.random() * 5}s`,
    left: `${Math.floor(Math.random() * 20) + 65}vw`,
    top: `${Math.floor(Math.random() * 33) + 50}vh`
  }" />
  <div v-if="Math.random() < 0.5" class="window absolute flicker" :style="{
    animationDuration: `${(Math.random() * 15) + 3}s`,
    animationDelay: `-${Math.random() * 5}s`,
    left: `${Math.floor(Math.random() * 20) + 65}vw`,
    top: `${Math.floor(Math.random() * 33) + 50}vh`
  }" /> -->

  <div v-for="i in gridCount" class="grid" :style="{
    backgroundSize: `${itemSize}em ${itemSize}em`,
    width: `calc(${itemSize * gridSize}em + 1px)`,
    height: `calc(${itemSize}em + 1px)`,
    top: `calc(10vh - ${i * itemSize}em)`,
    left: `calc(70vw + ${i * itemSize}em)`
  }"></div>

  <div class="grid" :style="{
    backgroundSize: `${itemSize}em ${itemSize}em`,
    width: `calc(${itemSize * gridSize}em + 1px)`,
    height: `calc(${itemSize * gridSize}em + 1px)`,
    left: '11vw',
    top: '85vh'
  }"></div>

  <div class="window nav-container">
    <div class="window-title">Navigate</div>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/links">Links</RouterLink>
    <RouterLink to="/gallery">Gallery</RouterLink>
  </div>

  <img src="/bagel01.png" alt="" id="zeph-img" />
</template>

<style scoped>

</style>
