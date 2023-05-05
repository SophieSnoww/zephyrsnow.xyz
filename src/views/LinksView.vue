<script setup>
const links = [
  {
    url: 'https://discord.gg/AmqvmdMYWE',
    name: 'Discord'
  },
  {
    url: 'https://steamcommunity.com/id/ZephyrSnoww/',
    name: 'Steam'
  },
  {
    url: 'https://www.twitch.tv/zephyrsnoww',
    name: 'Twitch'
  },
  {
    url: 'https://www.youtube.com/@ZephyrSnow',
    name: 'Youtube (Main account)'
  },
  {
    url: 'https://www.youtube.com/@zephyr_ii',
    name: 'Youtube (Gaming/misc account)'
  },
  {
    url: 'https://soundcloud.com/zephyrsnow',
    name: 'Soundcloud (Main account)'
  },
  {
    url: 'https://soundcloud.com/zephyr_ii',
    name: 'Soundcloud (Sketch account)'
  },
  {
    url: 'https://zephyrsnoww.tumblr.com',
    name: 'Tumblr'
  },
  {
    url: 'https://twitter.com/ZephyrSnoww',
    name: 'Twitter'
  },
  {
    url: 'https://github.com/ZephyrSnoww',
    name: 'Github'
  }
];
</script>

<template>
  <div class="page-container">
    <div class="window large">
      <div class="window-title">~/links.txt</div>
      <h1>All.My.Socials</h1>
      <ul class="links">
        <li class="link" v-for="link in links">
          <a target="_blank" :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.links {
  margin-top: 1em;
}

.link {
  font-size: 1.5em;
}
</style>
