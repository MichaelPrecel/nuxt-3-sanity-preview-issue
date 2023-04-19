export default defineNuxtPlugin(() => {
  const route = useRoute();
  const siteStore = useSiteStore();
  const preview = route.query.preview && route.query.preview === "true";

  if (preview) {
    siteStore.previewIsActive = true;
    siteStore.sanityClient = {
      client: "preview",
      server: false,
      initialCache: false,
    };
  }
});
