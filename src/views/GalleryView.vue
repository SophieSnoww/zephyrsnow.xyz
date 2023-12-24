<script setup>
import { reactive } from 'vue';

let state = reactive({
  images: [
    {
      artist: "boingward",
      link: "boingward01.png",
      fanart: true,
      loaded: false
    },
    {
      artist: "cocadope",
      link: "coca01.png",
      loaded: false
    },
    {
      artist: "sinnple",
      link: "sinnple01.png",
      loaded: false
    },
    {
      artist: "nebularobo",
      link: "nebularobo01.gif",
      loaded: false
    },
    {
      artist: "mynt-derg",
      link: "mynt-derg03.png",
      fanart: true,
      loaded: false
    },
    {
      artist: "nking",
      link: "nking01.png",
      fanart: true,
      loaded: false
    },
    {
      artist: "meeee :3",
      link: "zephdance2.gif",
      loaded: false
    },
    {
      artist: "michi",
      link: "michi01.png",
      loaded: false
    },
    {
      artist: "dividedanimus",
      link: "dividedanimus01.png",
      loaded: false
    },
    {
      artist: "mynt-derg",
      link: "mynt-derg01.jpg",
      fanart: true,
      loaded: false
    },
    {
      artist: "mynt-derg",
      link: "mynt-derg02.png",
      fanart: true,
      loaded: false
    },
    {
      artist: "kosse",
      link: "kosse01.png",
      loaded: false
    },
    {
      artist: "parotcardsroxy",
      link: "parotcardsroxy01.png",
      loaded: false
    },
    {
      artist: "sunservals",
      link: "sunservals01.png",
      loaded: false
    },
    {
      artist: "werewolfbarista",
      link: "werewolfbarista01.png",
      loaded: false
    },
    {
      artist: "masi",
      link: "masi01.png",
      fanart: true,
      loaded: false
    },
    {
      artist: "bagelcollie",
      link: "bagel01.png",
      loaded: false
    },
    {
      artist: "kevinplays42",
      link: "kevinplays4201.png",
      fanart: true,
      loaded: false
    },
    {
      artist: "nking",
      link: "nking02.png",
      fanart: true,
      loaded: false
    },
    {
      artist: "sunservals",
      link: "sunservals02.5.png",
      loaded: false
    },
    {
      artist: "sunservals",
      link: "sunservals02.png",
      loaded: false
    },
    {
      artist: "mochabean",
      link: "mocha01.png",
      fanart: true,
      loaded: false
    },
    {
      artist: "uovo0",
      link: "uovo001.png",
      loaded: false
    },
    {
      artist: "motheline",
      link: "motheline01.png",
      loaded: false
    },
    {
      artist: "10nova_",
      link: "10nova_01.jpg",
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
          <div class="fanart-tag" v-if="image.fanart">
            <div class="fanart-text">FANART -- </div>
            <div class="fanart-text">FANART -- </div>
            <div class="fanart-text">FANART -- </div>
          </div>
          
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

.fanart-tag {
  position: absolute;
  z-index: 1;
  background-color: var(--yellow);
  color: var(--fg);
  font-size: 2em;
  padding: 0.5em 0;
  padding-bottom: 1em;
  bottom: 0;
  /* gap: 0.5em; */
  display: flex;
  transform: translate(-180px, 0px) rotate(45deg);
}

.fanart-text {
  width: max-content;
  animation: fanart-scroll 2s linear infinite;
  padding-right: 0.5em;
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

@keyframes fanart-scroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
