<script setup>
// This component works in tandem with your Sanity Schema and Groq querie to allow external/internal/mail links to be added to inline text fields in Sanity and then correctly parsed on the frontend

defineProps({
  _type: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
  newWindow: {
    type: Boolean,
    default: null,
  },
  reference: {
    type: Object,
    default: null,
  },
  email: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <a
    class="link-underline"
    v-if="url"
    :href="url"
    :target="newWindow ? '_blank' : ''"
  >
    <slot />
  </a>
  <a
    class="link-underline"
    v-else-if="email"
    :href="`mailto:${email}`"
    target="_blank"
  >
    <slot />
  </a>
  <NuxtLink
    class="link-underline"
    v-else-if="reference"
    :to="resolveInternalLink(reference._type, reference.slug)"
  >
    <slot />
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
