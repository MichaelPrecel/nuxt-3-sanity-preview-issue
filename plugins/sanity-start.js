/* get global page data on start */
export default defineNuxtPlugin(async () => {
  const route = useRoute();
  const siteStore = useSiteStore();

  const sanityData = siteStore.fetchSiteData();

  await Promise.all([sanityData]);

  if (route.query.preview) {
    siteStore.previewIsActive = true;
  }
});
