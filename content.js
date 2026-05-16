const applySettings = (key, desired) => {
  const raw = localStorage.getItem(key);
  let current = {};

  if (raw !== null) {
    try {
      current = JSON.parse(raw);
    } catch {
      // ignore corrupt value, start fresh
    }
  }

  const merged = { ...current, ...desired };

  if (JSON.stringify(merged) !== JSON.stringify(current)) {
    localStorage.setItem(key, JSON.stringify(merged));
  }
};

applySettings("__VUE_DEVTOOLS_CLIENT_STATE__", {
  tabSettings: {
    hiddenTabCategories: ["modules", "advanced"],
    hiddenTabs: ["overview", "pages", "Timeline", "assets"],
    pinnedTabs: [],
  },
  expandSidebar: false,
  scrollableSidebar: true,
  scale: 1,
  interactionCloseOnOutsideClick: false,
  minimizePanelInteractive: 0,
  showPanel: false,
  reduceMotion: false,
  graphSettings: { node_modules: false, virtual: false, lib: false },
  splitScreen: { enabled: false, view: "overview", size: [50, 50] },
});

applySettings("__vue-devtools-frame-state__", {
  closeOnOutsideClick: false,
  minimizePanelInactive: 0,
  preferShowFloatingPanel: false,
  reduceMotion: false,
});

const theme = localStorage.getItem("__vue-devtools-theme__");
if (theme !== "dark") {
  localStorage.setItem("__vue-devtools-theme__", "dark");
}
