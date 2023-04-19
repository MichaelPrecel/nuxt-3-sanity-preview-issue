<script setup>
const props = defineProps({ data: Object });
const length = computed(() => props.data?.blocks?.length);

const parent = ref(null);
const startX = ref(0);
const scrollLeft = ref(0);
const isDown = ref(false);

// Mouse interactivity
function mouseIsDown(e) {
  if (length.value <= 3) return;
  isDown.value = true;
  startX.value = e.pageX - parent.value.offsetLeft;
  scrollLeft.value = parent.value.scrollLeft;
}
function mouseMove(e) {
  if (length.value <= 3) return;
  if (isDown.value) {
    e.preventDefault();
    //Move vertcally
    const x = e.pageX - parent.value.offsetLeft;
    const walkX = (x - startX.value) * 5;
    parent.value.scrollLeft = scrollLeft.value - walkX;
  }
}
</script>

<template>
  <section class="flex-col gap-s">
    <div
      class="header header-flex gap-s"
      :class="{ centered: data.centeredHeader }"
    >
      <div class="flex-col gap-xs">
        <div>
          <h2 v-if="data.title" class="bezier-lg preline">{{ data.title }}</h2>
          <h3 v-if="data.subtitle" class="text-lg brown">
            {{ data.subtitle }}
          </h3>
        </div>
        <SanityContentWrapper
          v-if="data.text"
          :blocks="data.text"
          class="text-sm md"
        />
      </div>
      <div v-if="data.linkInternal?.reference" class="flex-item">
        <NuxtLink
          class="btn bezier-md"
          :to="resolveInternalLink(data.linkInternal.reference)"
        >
          <SanityContent :blocks="data.linkInternal.title" />
        </NuxtLink>
      </div>
    </div>
    <div
      v-if="data.blocks"
      class="flex"
      :style="`--length: ${length}`"
      :class="[
        { 'scroll-snap': length > 3, single: length === 1, mousedown: isDown },
        `cols-${length > 3 ? 3 : length}`,
      ]"
      ref="parent"
      @mousedown="mouseIsDown($event)"
      @mouseup="isDown = false"
      @mouseleave="isDown = false"
      @mousemove="mouseMove($event)"
    >
      <CardsMaster
        v-for="card in data.blocks"
        :data="card"
        :ratio="length <= 2 ? '4/5' : null"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
section {
  padding: 0 var(--padding-hori);
  overflow: visible;
  max-width: 100%;
  --cols: 3;

  @include media("<mobile") {
    row-gap: var(--m);
  }
}

.header-flex {
  display: flex;
  justify-content: space-between;

  > div {
    max-width: var(--max-width-md);
  }

  &.centered {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.flex {
  gap: var(--gutter);
  row-gap: var(--m);
  align-items: start;
  flex-wrap: wrap;

  &.scroll-snap {
    margin-right: calc(var(--padding-hori) * -1);
    padding-right: var(--padding-hori);
    > div {
      min-width: calc((100% - (var(--gutter) * 2)) / 3);
    }
  }

  &.mousedown {
    cursor: grabbing;
  }

  > * {
    flex: 1;
    min-width: 300px;

    // *:last-child {
    //   margin-right: var(--padding-hori);
    // }
  }

  :deep(.card:nth-child(2n) .media) {
    border-radius: var(--radius);
    overflow: hidden;
  }
}

.cols-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
