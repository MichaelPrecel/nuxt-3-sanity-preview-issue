<script setup>
defineProps({
  data: {
    type: Object,
    default: null,
  },
});

const el = ref(null);
const uiStore = useUiStore();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      uiStore.headerWhite = entry.isIntersecting;
    });
  });
  observer.observe(el.value);
});
</script>

<template>
  <section ref="el" :class="data.textPlacement">
    <div v-if="data.video?.mp4" class="background-img">
      <MediaVideoAutoplay
        :mp4="data.video?.mp4"
        :webm="data.video?.webm"
        :alt="data.video?.alt"
      />
    </div>
    <div v-else-if="data.image" class="background-img">
      <nuxt-picture
        :src="data.image.asset._ref"
        loading="lazy"
        provider="sanity"
      />
    </div>

    <div class="text center flex-col gap-xs">
      <p class="bezier-xl white" v-motion-slide-bottom :delay="200">
        {{ data.textLarge }}
      </p>
      <p class="text-md white" v-motion-slide-bottom :delay="300">
        {{ data.textSmall }}
      </p>
      <NuxtLink
        v-if="data.button"
        :to="resolveInternalLink(data.button.reference)"
        class="btn white m-t-s"
        v-motion-slide-bottom
        :delay="400"
      >
        <span class="bezier-md">
          <SanityContent :blocks="data.button.title" />
        </span>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
  padding: var(--s) var(--padding-hori);
  position: relative;
  padding-top: var(--header);
  padding-bottom: calc(var(--m));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: 2;
  background-color: black;
  // position: sticky;
  // top: 0;
  // width: 100%;

  // Default: center
  &.center {
    justify-content: center;
    align-items: center;
  }

  &[class*="right"] {
    align-items: flex-end;
  }
  &[class*="Bottom"] {
    justify-content: flex-end;
  }

  &.left {
    justify-content: center;
  }

  &.right {
    justify-content: center;
  }

  &.center,
  &.left,
  &.right {
    .text {
      transform: translateY(calc(var(--s) * -1));
    }
  }
}

.text {
  width: 100%;
  max-width: 70rem;
  align-items: center;
}

.logo {
  width: clamp(7rem, 10vw, 10rem);
}

.marquee {
  border-bottom: none;
}

.btn {
  &:hover,
  &:focus {
    transform: scale(1.1) rotate(7deg) !important;
    background-color: var(--yellow) !important;
    box-shadow: var(--shadow-elevation-medium) !important;
  }
}

.text-md {
  max-width: 500px;
  @include media("<mobile") {
    max-width: 350px;
  }
}

// .btn {
//   margin: auto;
//   background-color: transparent;
//   color: white;
//   border: 1px solid white;
// }
</style>
