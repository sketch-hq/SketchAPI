interface _MSStyleBasicFillUninitialized<InitializedType = _MSStyleBasicFill> extends MSStylePartUninitialized<_MSStyleBasicFill> {}

interface _MSStyleBasicFill extends MSStylePart {

  fillType(): BCFillType;
  setFillType(fillType: BCFillType): void;
  color(): MSColor;
  setColor(color: MSColor): void;
  contextSettings(): MSGraphicsContextSettings;
  setContextSettings(contextSettings: MSGraphicsContextSettings): void;
  gradient(): MSGradient;
  setGradient(gradient: MSGradient): void;
}

declare const _MSStyleBasicFill: {
  alloc(): _MSStyleBasicFillUninitialized;
  class(): _MSStyleBasicFill;
  stylesHaveEqualAppearance(styles: NSArray<any> | any[]): boolean;
  defaultStylePartForStyle(style: MSStyle): MSStylePart;
}

