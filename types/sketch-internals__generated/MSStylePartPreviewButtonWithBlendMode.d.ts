interface MSStylePartPreviewButtonWithBlendModeUninitialized<InitializedType = MSStylePartPreviewButtonWithBlendMode> extends MSStylePartPreviewButtonUninitialized<MSStylePartPreviewButtonWithBlendMode> {}
interface MSStylePartPreviewButtonWithBlendMode extends MSStylePartPreviewButton {

  delegate(): any;
  setDelegate(delegate: any): void;
  blendModes(): NSSet<any>;
  setBlendModes(blendModes: NSSet<any>): void;
}
declare const MSStylePartPreviewButtonWithBlendMode: {
  alloc(): MSStylePartPreviewButtonWithBlendModeUninitialized;
  class(): MSStylePartPreviewButtonWithBlendMode;
}

