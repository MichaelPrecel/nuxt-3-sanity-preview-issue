<script setup>
defineProps({ video: Object, image: Object });
</script>

<template>
  <div class="ratio-box" style="--ratio: 2/3">
    <MediaVideoAutoplay
      v-if="video?.mp4"
      :mp4="video.mp4"
      :webm="video?.webm"
      :alt="video?.alt"
    />
    <nuxt-picture
      v-else-if="image?.asset"
      :src="image.asset._ref"
      provider="sanity"
      loading="lazy"
      :style="{
        '--hotspot-x': image?.hotspot?.x,
        '--hotspot-y': image?.hotspot?.y,
      }"
    />
  </div>
</template>

<style lang="scss" scoped></style>
