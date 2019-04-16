interface MSColorWellUninitialized<InitializedType = MSColorWell> extends MSStylePartPreviewButtonUninitialized<MSColorWell> {}
interface MSColorWell extends MSStylePartPreviewButton {
  prepareWithDocument_initialColor(document: MSDocument, color: NSColor | null): void;

  initialColor(): NSColor;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSColorWell: {
  alloc(): MSColorWellUninitialized;
  class(): MSColorWell;
}

