interface SiteSettings {
  menu: object;
  footer: object;
  announcer?: object;
  navProducts?: [object];
  [key: string]: any;
}

export const useSiteStore = defineStore("site", () => {
  // Composbables
  const runtimeConfig = useRuntimeConfig();

  // Refs
  const settings = ref<SiteSettings>();
  const products = ref<any>([]);

  // Preview
  const previewIsActive = ref(false);
  const sanityClient = ref(undefined);

  // Computed
  const slugs = computed(() => {
    if (!settings.value?.slugs) return;
    const singletons = ["/", "/shop", "/404"];
    const pages = [
      ...settings.value.slugs.pages,
      ...settings.value.slugs.infoPages,
      ...settings.value.slugs.products,
    ].map((page) => page.slug);
    return pages.concat(singletons);
  });

  // Actions
  async function fetchSiteData(): Promise<void> {
    const { data } = await useSanityQuery(querySite);
    settings.value = data.value as SiteSettings; // Load to store
  }

  // Fetch products from Shopify
  async function fetchShopifyData(): Promise<void> {
    const { data: result } = await useAsyncData("shopify", () =>
      $fetch(runtimeConfig.public.shopifyApiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token":
            runtimeConfig.public.shopifyStorefrontAccess,
        },
        body: {
          query: queryShopifyData,
        },
      })
    );
    products.value = result.value?.data?.collection?.products?.edges.map(
      ({ node }) => node
    );
  }

  return {
    settings,
    products,
    fetchSiteData,
    fetchShopifyData,
    slugs,
    previewIsActive,
    sanityClient,
  };
});
