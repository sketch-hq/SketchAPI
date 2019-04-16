interface MSCloudUploadArrowViewUninitialized<InitializedType = MSCloudUploadArrowView> extends NSViewUninitialized<MSCloudUploadArrowView> {}

interface MSCloudUploadArrowView extends NSView {
  startAnimation(): void;
}

declare const MSCloudUploadArrowView: {
  alloc(): MSCloudUploadArrowViewUninitialized;
  class(): MSCloudUploadArrowView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

