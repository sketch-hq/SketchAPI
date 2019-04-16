interface NSPanelUninitialized<InitializedType = NSPanel> extends NSWindowUninitialized<NSPanel> {}
interface NSPanel extends NSWindow {

  floatingPanel(): boolean;
  setFloatingPanel(floatingPanel: boolean): void;
  becomesKeyOnlyIfNeeded(): boolean;
  setBecomesKeyOnlyIfNeeded(becomesKeyOnlyIfNeeded: boolean): void;
  worksWhenModal(): boolean;
  setWorksWhenModal(worksWhenModal: boolean): void;
}
declare const NSPanel: {
  alloc(): NSPanelUninitialized;
  class(): NSPanel;
}

