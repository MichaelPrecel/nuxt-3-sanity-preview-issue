<script setup>
const siteStore = useSiteStore();
const { data } = await useSanityQuery(
  queryPageHome,
  {},
  siteStore.sanityClient
);
</script>

<template>
  <main class="home">
    <ModulesLandingHome v-if="data?.landing" :data="data.landing" />
    <ModulesBuilder v-if="data?.builder" :data="data.builder" />
  </main>
</template>

<style lang="scss" scoped></style>
