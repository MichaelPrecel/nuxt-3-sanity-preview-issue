<script setup>
defineProps({ data: Object });
</script>

<template>
  <NuxtLink
    v-if="data?.reference"
    class="btn nowrap"
    :to="resolveInternalLink(data.reference)"
  >
    <SanityContent :blocks="data.title" />
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
