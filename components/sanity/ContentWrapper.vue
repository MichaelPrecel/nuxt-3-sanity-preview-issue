<script setup>
import { resolveComponent } from "vue";
defineProps({ blocks: Array });

const serializers = {
  marks: {
    annotationLinkInternal: resolveComponent("SanityInlineLink"),
    annotationLinkExternal: resolveComponent("SanityInlineLink"),
    annotationLinkEmail: resolveComponent("SanityInlineLink"),
    imageVideo: resolveComponent("MediaImageVideoMd"),
  },
};
</script>

<template>
  <div class="rich-text">
    <SanityContent v-if="blocks" :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<style lang="scss" scoped>
.rich-text {
  white-space: pre-line;
}
</style>
