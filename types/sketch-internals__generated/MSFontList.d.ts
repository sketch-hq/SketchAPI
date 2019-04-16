interface MSFontListUninitialized<InitializedType = MSFontList> extends NSObjectUninitialized<MSFontList> {
  initWithDocumentData(documentData: MSDocumentData): InitializedType;
}
interface MSFontList extends NSObject {
  reloadFonts(): void;
  numberOfFontFamilies(): NSUInteger;
  nameOfFontFamilyAtIndex(index: NSUInteger): NSString;
  fontForFontFamilyAtIndex(index: NSUInteger): NSFont;
  filter(filter: NSString | string): void;
  clearFilter(): void;
  startCachingFonts(): void;
  prepareForDealloc(): void;

  documentFontFamilyNames(): NSArray<any>;
  documentData(): MSDocumentData;
}
declare const MSFontList: {
  alloc(): MSFontListUninitialized;
  class(): MSFontList;
}

