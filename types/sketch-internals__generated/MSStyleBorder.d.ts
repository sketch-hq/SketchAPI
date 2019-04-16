interface MSStyleBorderUninitialized<InitializedType = MSStyleBorder> extends _MSStyleBorderUninitialized<MSStyleBorder> {}

interface MSStyleBorder extends _MSStyleBorder, IMSColorConvertible {
  CSSAttributeString(): NSString;
  supportsAdvancedBorderSettings(): boolean;
  asFill(): MSStyleFill;
  convertColorsUsing(converter: any): void;
}

declare const MSStyleBorder: {
  alloc(): MSStyleBorderUninitialized;
  class(): MSStyleBorder;
}

