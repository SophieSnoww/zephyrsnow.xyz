<script setup>
const props = defineProps({
  character: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="character-select-icon">
    <div v-if="character.available" class="csi-content available">
      <img :src="props.character.dark_icon" alt="" class="csi-dark-icon">
      <img :src="props.character.icon" alt="" class="csi-icon">
      <div class="csi-bg-text-container">
        <div v-for="i in 15" class="csi-bg-text">
          <div v-for="o in 5" class="csi-bg-text-repeating">{{props.character.name}}</div>
        </div>
      </div>
    </div>
    <div v-if="!character.available" class="csi-content unavailable">
      <div class="unavailable-icon">?</div>
    </div>
  </div>
</template>

<style scoped>
.character-select-icon {
  width: 12vw;
  height: 80%;
  margin: 10px;
  border: 3px solid var(--white);
  border-radius: 10px;
  transform: rotate(-5deg);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.csi-content {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  /* border: 1px solid var(--white); */
  transform: rotate(5deg);
  background-color: #181818;
  display: flex;
  align-items: center;
  justify-content: center;
}

.csi-content.available {
  cursor: pointer;
}

.unavailable-icon {
  font-size: 7em;
  font-weight: bold;
  transform: rotate(10deg);
  color: var(--black);
  cursor: default;
}

.csi-icon, .csi-dark-icon {
  position: absolute;
  /* top: 0; */
  bottom: 0;
  width: 100%;
  transition: 0.5s ease;
}

.csi-icon {
  opacity: 0;
}

.csi-bg-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -1;
  color: var(--black);
  transition: 0.5s ease;
  font-family: valorant, sans-serif;
}

.csi-bg-text {
  display: flex;
  width: max-content;
  animation: scroll-left 7s linear infinite;
}

.csi-bg-text:nth-child(2n) {
  animation: scroll-right 5s linear infinite;
}

.csi-bg-text-repeating {
  width: max-content;
  margin-left: 10px;
}

.character-select-icon:hover .csi-icon {
  opacity: 1;
}

.character-select-icon:hover .csi-bg-text-container {
  color: var(--offwhite);
}

@keyframes scroll-right {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(20%);
  }
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-20%);
  }
}
</style>
