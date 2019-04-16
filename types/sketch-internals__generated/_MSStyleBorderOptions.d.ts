interface _MSStyleBorderOptionsUninitialized<InitializedType = _MSStyleBorderOptions> extends MSStylePartUninitialized<_MSStyleBorderOptions> {}

interface _MSStyleBorderOptions extends MSStylePart {

  dashPattern(): NSArray<any>;
  setDashPattern(dashPattern: NSArray<any> | any[]): void;
  lineCapStyle(): NSLineCapStyle;
  setLineCapStyle(lineCapStyle: NSLineCapStyle): void;
  lineJoinStyle(): NSLineJoinStyle;
  setLineJoinStyle(lineJoinStyle: NSLineJoinStyle): void;
}

declare const _MSStyleBorderOptions: {
  alloc(): _MSStyleBorderOptionsUninitialized;
  class(): _MSStyleBorderOptions;
  stylesHaveEqualAppearance(styles: NSArray<any> | any[]): boolean;
  defaultStylePartForStyle(style: MSStyle): MSStylePart;
}

