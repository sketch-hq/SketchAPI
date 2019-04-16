interface MSStylePartUninitialized<InitializedType = MSStylePart> extends _MSStylePartUninitialized<MSStylePart> {}
interface MSStylePart extends _MSStylePart, INSCopying, IMSStylePart {
  previewImageForSize_colorSpace(size: NSSize, colorSpace: NSColorSpace): NSImage;
  hasEqualAppearance(other: MSStylePart): boolean;
  multiplyBy(amount: CGFloat): void;
  parentStyle(): MSStyle;
  parentLayer(): MSStyledLayer;
  wantsColorModePicker(): boolean;
}
declare const MSStylePart: {
  alloc(): MSStylePartUninitialized;
  class(): MSStylePart;  stylesHaveEqualAppearance(styles: NSArray<any> | any[]): boolean;
  defaultStylePartForStyle(style: MSStyle): MSStylePart;

}

