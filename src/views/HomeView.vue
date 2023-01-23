<script setup>
import { reactive } from 'vue';
import SelectIcon from '../components/character_select/SelectIcon.vue';

let state = reactive({
  currentChar: {
    available: true,
    name: null,
    short: null,
    icon: null,
    dark_icon: null,
    fullbody: null,
    color1: null,
    color2: null
  }
});

const characters = [
  {
    available: true,
    name: "Zephyr Snow",
    short: "Zeph",
    icon: "/images/zeph/0_Normal.png",
    dark_icon: "/images/zeph/0_Normal_darkened.png",
    fullbody: "/images/zeph/COCA_Zephyr_ref_solo.png",
    color1: "#4EAC6D",
    color2: "#9A1515"
  },
  {
    available: false,
    name: "Sylas Sterling",
    short: "SV145",
    icon: null,
    fullbody: null,
    color1: "#00FF00",
    color2: "#0066FF"
  },
  {
    available: true,
    name: "Carmen Devereaux",
    short: "Carmen",
    icon: "/images/carmen/carmen_icon.png",
    dark_icon: "/images/carmen/carmen_icon_dark.png",
    fullbody: "/images/carmen/carmen.png",
    color1: "#a78bc1",
    color2: "#75e077"
  },
  {
    available: false,
    name: "Nezumi",
    short: "Nez",
    icon: null,
    fullbody: null,
    color1: "#000000",
    color2: "#000000"
  }
];

function hover (character) {
  state.currentChar = character;
  console.log("h");
}
</script>

<template>
  <div class="page home">
    <div class="character-select">
      <div class="main">
        <div class="background"></div>
        <img :src="(state.currentChar.available) ? (state.currentChar.fullbody) : ('')" alt="" class="character-image" />
      </div>
      <div class="bottom">
        <div class="bottom-content">
          <SelectIcon v-for="character in characters" :character="character" @mouseenter="hover(character)" @mouseleave="hover({})" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.character-select {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}

.main {
  flex: 0 0 70%;
  width: 100%;
  position: relative;
}

.character-image {
  position: absolute;
  top: 5vh;
  left: 25vw;
  /* width: 40vw; */
  height: 90vh;
  object-fit: contain;
  transform: rotate(-5deg);
}

.bottom {
  border-top: 5px solid var(--white);
  flex: 0 0 34%;
  width: 110vw;
  transform: rotate(-2deg);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  background-color: var(--black);
}

.bottom-content {
  transform: rotate(2deg);
  /* border: 1px solid var(--white); */
  height: 100%;
  width: 75%;
  margin-top: -1%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
