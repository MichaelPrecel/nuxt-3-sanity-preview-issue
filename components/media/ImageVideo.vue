<script setup>
defineProps({ data: Object });
</script>

<template>
  <MediaVideoAutoplay
    v-if="data.video?.mp4"
    :mp4="data.video.mp4"
    :webm="data.video?.webm"
    :alt="data.video?.alt"
  />
  <nuxt-picture
    v-else-if="data.image?.asset"
    :src="data.image.asset._ref"
    provider="sanity"
    loading="lazy"
    :style="{
      '--hotspot-x': data.image?.hotspot?.x,
      '--hotspot-y': data.image?.hotspot?.y,
    }"
  />
</template>

<style lang="scss" scoped></style>
