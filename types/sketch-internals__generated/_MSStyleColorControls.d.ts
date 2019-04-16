interface _MSStyleColorControlsUninitialized<InitializedType = _MSStyleColorControls> extends MSStylePartUninitialized<_MSStyleColorControls> {}

interface _MSStyleColorControls extends MSStylePart {

  brightness(): CGFloat;
  setBrightness(brightness: CGFloat): void;
  contrast(): CGFloat;
  setContrast(contrast: CGFloat): void;
  hue(): CGFloat;
  setHue(hue: CGFloat): void;
  saturation(): CGFloat;
  setSaturation(saturation: CGFloat): void;
}

declare const _MSStyleColorControls: {
  alloc(): _MSStyleColorControlsUninitialized;
  class(): _MSStyleColorControls;
  stylesHaveEqualAppearance(styles: NSArray<any> | any[]): boolean;
  defaultStylePartForStyle(style: MSStyle): MSStylePart;
}

