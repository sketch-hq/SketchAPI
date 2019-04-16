interface MSSharedObjectViewUninitialized<InitializedType = MSSharedObjectView> extends NSViewUninitialized<MSSharedObjectView> {}
interface MSSharedObjectView extends NSView {

  sharedObject(): MSShareableObject;
  setSharedObject(sharedObject: MSShareableObject): void;
  label(): NSString;
  setLabel(label: NSString | string): void;
  labelColor(): NSColor;
  setLabelColor(labelColor: NSColor): void;
  labelBackgroundColor(): NSColor;
  setLabelBackgroundColor(labelBackgroundColor: NSColor): void;
  previewColorSpace(): NSColorSpace;
  setPreviewColorSpace(previewColorSpace: NSColorSpace): void;
  borders(): NSUInteger;
  setBorders(borders: NSUInteger): void;
  hasShadow(): boolean;
  setHasShadow(hasShadow: boolean): void;
}
declare const MSSharedObjectView: {
  alloc(): MSSharedObjectViewUninitialized;
  class(): MSSharedObjectView;
}

