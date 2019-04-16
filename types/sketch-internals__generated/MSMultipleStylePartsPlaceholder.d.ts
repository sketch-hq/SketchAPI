interface MSMultipleStylePartsPlaceholderUninitialized<InitializedType = MSMultipleStylePartsPlaceholder> extends MSStylePartUninitialized<MSMultipleStylePartsPlaceholder> {}

interface MSMultipleStylePartsPlaceholder extends MSStylePart {
}

declare const MSMultipleStylePartsPlaceholder: {
  alloc(): MSMultipleStylePartsPlaceholderUninitialized;
  class(): MSMultipleStylePartsPlaceholder;
  stylesHaveEqualAppearance(styles: NSArray<any> | any[]): boolean;
  defaultStylePartForStyle(style: MSStyle): MSStylePart;
}

