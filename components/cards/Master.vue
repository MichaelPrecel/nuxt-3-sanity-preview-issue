<script setup>
const props = defineProps({ data: Object, ratio: String });
</script>

<template>
  <div
    class="card card-master flex-col gap-xs"
    :style="
      data?.imageRatio
        ? `--ratio:${data?.imageRatio}`
        : `--ratio:${ratio || 5 / 4}`
    "
  >
    <div class="media">
      <div class="ratio-box">
        <MediaImageVideo
          v-if="data.mediaPrimary?.image || data.mediaPrimary?.video"
          :data="data.mediaPrimary"
        />
      </div>

      <div
        v-if="
          data.mediaSecondary || data.productWithVariant?.product?.hoverVideo
        "
        class="ratio-box media-secondary"
      >
        <MediaImageVideo
          :data="
            data.mediaSecondary || data.productWithVariant?.product?.hoverVideo
          "
        />
      </div>
    </div>
    <div class="flex-col gap-xxs">
      <div>
        <div class="flex flex-justify align-center">
          <h3 v-if="data.title" class="bezier-md">
            <NuxtLink v-if="data.title" :to="slug">{{ data.title }}</NuxtLink>
            <NuxtLink v-else :to="slug">
              {{ data.productWithVariant?.product.store.title }}
            </NuxtLink>
          </h3>
        </div>
      </div>
      <div
        v-if="
          data.text || data.productWithVariant?.product?.store?.descriptionHtml
        "
        class="text para-below"
      >
        <p
          v-if="data.productWithVariant?.product?.store?.descriptionHtml"
          v-html="data.productWithVariant?.product.store.descriptionHtml"
        />
        <SanityContentWrapper v-else :blocks="data.text" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  &:hover,
  &:focus {
    .media-secondary {
      opacity: 1;
    }
  }
}

.media {
  position: relative;
  display: block;
}

.media-secondary {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-out;
  z-index: 1;
}

.btn {
  // position: absolute;
  // bottom: var(--s);
  // right: var(--s);
  // z-index: 2;
  margin-top: var(--xs);
  margin-right: auto;

  @include media("<tablet") {
    // top: initial;
    // bottom: var(--s);
    // transform: rotate(7deg);
  }
}

.text {
  max-width: var(--max-width-md);
}
</style>
