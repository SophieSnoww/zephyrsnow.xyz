<script setup>
import { reactive } from 'vue';
import { RouterView } from 'vue-router';
import Window from './components/Window.vue';

let state = reactive({
  mouseData: {
    x: undefined,
    y: undefined
  },
  windowData: {
    draggingWindow: undefined,
    1: {
      top: 50,
      left: 50,
      enabled: true
    }
  }
});

function handleDrag (event, window) {
  if (window) {
    state.windowData[window].top += event.pageY - state.mouseData.y;
    state.windowData[window].left += event.pageX - state.mouseData.x;

    state.mouseData.y = event.pageY;
    state.mouseData.x = event.pageX;
  }
}
</script>

<template>
  <!-- <RouterView v-slot="{ Component, route }">
    <Transition :name="route.meta.transition" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView> -->
  <div class="app-container" @mousemove="(e) => handleDrag(e, state.windowData.draggingWindow)">
    <img src="/wallpaper.jpg" alt="Wallpaper" class="wallpaper" />

    <div class="taskbar">
      <div class="taskbar-item taskbar-logo">
        <img src="/icons/windows11.svg" alt="Windows logo" class="taskbar-logo-image">
      </div>

      <div class="taskbar-seperator"></div>

      <div class="taskbar-item">
        <img src="/icons/files.svg" alt="File browser" class="taskbar-files-image">
      </div>
      <div class="taskbar-item">
        <img src="/icons/firefoxbrowser.svg" alt="Firefox logo" class="taskbar-browser-image">
      </div>
      <div class="taskbar-item" @click="(e) => state.windowData[1].enabled = !state.windowData[1].enabled">
        <img src="/icons/sublimetext.svg" alt="Sublime text logo" class="taskbar-notepad-image">
      </div>
    </div>

    <!-- <div
      class="window"
      @mousedown="(e) => {
        state.windowData.draggingWindow = 1;
        state.mouseData.x = e.pageX;
        state.mouseData.y = e.pageY;
      }"
      @mouseup="(e) => { state.windowData.draggingWindow = undefined; }"
      :style="{
        top: `${state.windowData[1].top}px`,
        left: `${state.windowData[1].left}px`
      }"
    >
      <div class="window-title">testing</div>
      <div class="window-content">hi</div>
    </div> -->

    <Window v-if="state.windowData[1].enabled" :windowID="1" :state="state" title="Testing!">
      <h1>hi</h1>
      <p>hello. tis i. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo illo deserunt amet libero, temporibus aperiam minima, assumenda maxime facere impedit dolores eligendi laudantium. Deserunt earum amet veritatis dignissimos, doloremque animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quaerat iste harum, aspernatur repellat at reiciendis! Repellat accusantium assumenda inventore, illo voluptates quae consequuntur enim natus repellendus, qui minima ea?</p>
    </Window>
  </div>
</template>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
}

.wallpaper {
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.taskbar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  background-color: var(--bg);

  display: flex;
  align-items: center;
  padding: 15px;
  gap: 15px;
}

.taskbar-item {
  height: 100%;
  flex: 0 0 30px;
}

.taskbar-seperator {
  height: 100%;
  flex: 0 0 1px;
  background-color: var(--fg);
  margin: 0px 10px;
}
</style>
