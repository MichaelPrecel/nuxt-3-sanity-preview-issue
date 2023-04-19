export const useUiStore = defineStore("ui", () => {
  const headerHeight = ref(0);
  const navActive = ref(false);
  const mobileMenuActive = ref(false);
  const announcerActive = ref(false);
  const headerWhite = ref(false);
  const menuActive = ref(false);

  return {
    headerHeight,
    navActive,
    mobileMenuActive,
    announcerActive,
    headerWhite,
    menuActive,
  };
});
