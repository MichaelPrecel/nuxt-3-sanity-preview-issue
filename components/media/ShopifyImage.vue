<script setup>
const props = defineProps({
  data: Object,
  src: String,
  alt: String,
  height: Number,
  width: Number,
});

const url = computed(() => (props.data?.url ? props.data.url : props.src));
</script>

<template>
  <img
    v-if="url"
    :src="`${url + '&width=50'}`"
    :srcset="`${url + '&width=600'} 600w,
      ${url + '&width=900'} 900w, 
      ${url + '&width=1200'} 1200w, 
      ${url + '&width=2000'} 2000w,
      ${url + '&width=2400'} 2400w`"
    sizes="(max-width: 600px) 600px, 
    (max-width: 900px) 900px, 
    (max-width: 1200px) 1200px, 
    (max-width: 2o00px) 2000px, 
    (max-width: 2400px) 2400px, 
    900w"
    :alt="data?.altText || alt || null"
    :height="data?.height || height || null"
    :width="data?.width || width || null"
    loading="lazy"
  />
</template>
