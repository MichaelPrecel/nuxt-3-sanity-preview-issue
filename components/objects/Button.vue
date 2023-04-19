<script setup>
defineProps({ data: Object });
</script>

<template>
  <NuxtLink
    v-if="data.linkInternal || data.linkExternal"
    :to="
      data.linkInternal
        ? resolveInternalLink(data.linkInternal)
        : data.linkExternal
    "
    :target="data?.newWindow ? '_blank' : null"
    class="btn"
    ><SanityContent :blocks="data.title"
  /></NuxtLink>
</template>

<style lang="scss" scoped></style>
