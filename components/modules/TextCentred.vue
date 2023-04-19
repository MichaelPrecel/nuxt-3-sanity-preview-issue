<script setup>
defineProps({ data: Object });
</script>

<template>
  <section class="module flex-col gap-s center">
    <div class="flex-col gap-xs">
      <div v-if="data.images" class="images flex justify-center gap-s">
        <NuxtPicture
          v-for="(image, i) in data.images"
          :src="image.asset._ref"
          provider="sanity"
          loading="lazy"
          v-motion-slide-visible-once-bottom
          :delay="1 * 200"
        />
      </div>
      <h1 v-if="data.title" class="bezier-xl">{{ data.title }}</h1>
    </div>
    <p class="text-md">
      {{ data.text }}
    </p>
    <ObjectsButton
      v-if="data.button"
      :data="data.button"
      class="btn bezier-md"
    />
  </section>
</template>

<style lang="scss" scoped>
.module {
  padding: 0 var(--padding-hori);
  grid-template-columns: 1fr 2fr;
  align-items: center;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;
}

.images {
  > * {
    flex: 1;
    max-width: 15rem;
  }
}

.btn {
  margin: auto;
}
</style>
