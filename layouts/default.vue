<template>
  <div class="layout">
    <div class="inner">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.inner {
  z-index: 2;
  background-color: white;
  background-color: var(--cream);
  position: relative;
  box-shadow: var(--shadow-elevation-medium);
}

.footer {
  position: sticky;
  bottom: 0;
}

.loading-bar {
  z-index: 9999;
}
</style>
