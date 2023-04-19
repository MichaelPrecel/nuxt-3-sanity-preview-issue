<script setup>
defineProps({ data: Array });

const blockType = (type) => {
  switch (type) {
    case "module.textCentred":
      return resolveComponent("ModulesTextCentred");
    case "module.grid":
      return resolveComponent("ModulesGrid");
    case "module.usp":
      return resolveComponent("ModulesUsp");
    case "module.reviews":
      return resolveComponent("ModulesReviews");
    case "module.logoCarousel":
      return resolveComponent("ModulesLogoCarousel");
    case "module.cinematic":
      return resolveComponent("ModulesCinematic");
    case "module.ugcs":
      return resolveComponent("ModulesUgcs");
    case "module.textCols":
      return resolveComponent("ModulesTextCols");
    case "module.faq":
      return resolveComponent("ModulesFaq");
    case "module.annotator":
      return resolveComponent("ModulesAnnotator");
  }
};
</script>

<template>
  <section v-if="data" class="modules">
    <template v-for="block in data" :key="block._key">
      <Component
        v-if="!block.settings?.hide"
        :is="blockType(block._type)"
        :data="block"
        class="block"
      />
    </template>
  </section>
</template>

<style lang="scss" scoped>
.modules {
  background: var(--cream);
  z-index: 2;
  padding: var(--l) 0;
  position: relative;

  // > * {
  //   padding-top: 0;
  //   padding-bottom: 0;
  //   & + * {
  //     margin-top: var(--xl);
  //   }
  // }
}
</style>
