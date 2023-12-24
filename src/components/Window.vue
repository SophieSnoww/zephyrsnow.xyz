<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  windowID: {
    required: true,
  },
  state: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div
    class="window"
    @mousedown="(e) => {
      state.windowData.draggingWindow = windowID;
      state.mouseData.x = e.pageX;
      state.mouseData.y = e.pageY;
    }"
    @mouseup="(e) => { state.windowData.draggingWindow = undefined; }"
    :style="{
      top: `${state.windowData[windowID].top}px`,
      left: `${state.windowData[windowID].left}px`
    }"
  >
    <div class="window-title-bar">
      <div class="window-title-text">{{ title }}</div>
      <div class="window-title-spacer"></div>
      <div class="window-title-icon" @click="(e) => state.windowData[windowID].enabled = false">minimize</div>
      <div class="window-title-icon" @click="(e) => state.windowData[windowID].enabled = false">close</div>
    </div>
    <div class="window-content">
      <slot>
        This window doesn't have any content!
      </slot>
    </div>
  </div>
</template>

<style scoped>
.window {
  width: 550px;
  max-width: 90vw;
  /* min-height: 100px; */
  /* max-height: 50vh; */
  /* padding: 1em; */
  margin: 2em;

  border: 1px solid var(--bg);
  border-top: 2em solid var(--bg);
  /* border-radius: 5px; */

  background-color: var(--bg-light);

  position: absolute;
  user-select: none;
}

.window-title-bar {
  position: absolute;
  top: -1.5em;
  display: flex;
  gap: 0.5em;
  width: 100%;
  padding: 0em 0.5em;
}

.window-title-spacer {
  flex: 1 0;
}

.window-title-icon {
  font-family: 'Material Icons';
}

.window-content {
  padding: 1em;
}

/* .window-title {
  position: absolute;
  top: -1.35em;
  left: 0.25em;
  color: var(--fg);
} */
</style>
