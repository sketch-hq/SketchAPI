interface MSDataPreviewUninitialized<InitializedType = MSDataPreview> extends NSViewUninitialized<MSDataPreview> {}

interface MSDataPreview extends NSView {

  dataItem(): MSDataPreferenceItem;
  setDataItem(dataItem: MSDataPreferenceItem): void;
}

declare const MSDataPreview: {
  alloc(): MSDataPreviewUninitialized;
  class(): MSDataPreview;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

