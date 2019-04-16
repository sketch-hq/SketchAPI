interface MSExporterViewUninitialized<InitializedType = MSExporterView> extends NSViewUninitialized<MSExporterView> {}

interface MSExporterView extends NSView {

  renderer(): MSExporter;
  setRenderer(renderer: MSExporter): void;
}

declare const MSExporterView: {
  alloc(): MSExporterViewUninitialized;
  class(): MSExporterView;
  exportViewWithRenderer(renderer: MSExporter): MSExporterView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

