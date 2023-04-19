<script setup>
const props = defineProps({
  mp4: {
    type: String,
    default: null,
  },
  webm: {
    type: String,
    default: null,
  },
  alt: {
    type: String,
    default: null,
  },
  poster: {
    type: Object,
    default: null,
  },
  posterSize: {
    type: Number,
    default: 1200,
  },
});

const nuxtApp = useNuxtApp();

// Lazyload
const visible = ref(false);
const loaded = ref(false);
const video = ref(null);

onMounted(() => {
  var lazyVideoObserver = new IntersectionObserver(function (
    entries,
    observer
  ) {
    entries.forEach(function (vid) {
      if (vid.isIntersecting) {
        visible.value = true;
        vid.target.load();
        lazyVideoObserver.unobserve(vid.target);
      }
    });
  });

  video.value.addEventListener("canplay", () => {
    loaded.value = true;
  });

  lazyVideoObserver.observe(video.value);
});
</script>

<template>
  <video
    v-if="mp4 || webm"
    ref="video"
    autoplay
    playsinline
    muted
    loop
    :preload="!visible ? 'none' : 'metadata'"
    :alt="alt"
    :class="{ loaded }"
    :poster="poster ? nuxtApp.$urlFor(poster).width(posterSize).url() : null"
  >
    <source
      ref="webm"
      v-if="webm"
      :src="visible ? webm + '#t=0.1' : ''"
      type="video/webm"
    />
    <source
      ref="mp4"
      v-if="mp4"
      :src="visible ? mp4 + '#t=0.1' : ''"
      type="video/mp4"
    />
  </video>
</template>

<style lang="scss" scoped>
video {
  transition: opacity 0.4s, filter 0.4s;
  opacity: 0;
  filter: blur(15px);
  max-width: 100%;

  &.loaded {
    opacity: 1;
    filter: blur(0px);
  }
}
</style>
