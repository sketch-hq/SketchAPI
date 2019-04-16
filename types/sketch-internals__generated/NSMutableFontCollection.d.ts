interface NSMutableFontCollectionUninitialized<InitializedType = NSMutableFontCollection> extends NSFontCollectionUninitialized<NSMutableFontCollection> {}
interface NSMutableFontCollection extends NSFontCollection {
  addQueryForDescriptors(descriptors: NSArray<any> | any[]): void;
  removeQueryForDescriptors(descriptors: NSArray<any> | any[]): void;

  queryDescriptors(): NSArray<any>;
  setQueryDescriptors(queryDescriptors: NSArray<any> | any[]): void;
  exclusionDescriptors(): NSArray<any>;
  setExclusionDescriptors(exclusionDescriptors: NSArray<any> | any[]): void;
}
declare const NSMutableFontCollection: {
  alloc(): NSMutableFontCollectionUninitialized;
  class(): NSMutableFontCollection;  fontCollectionWithDescriptors(queryDescriptors: NSArray<any> | any[]): NSMutableFontCollection;
  fontCollectionWithLocale(locale: NSLocale): NSMutableFontCollection;
  fontCollectionWithName(name: NSFontCollectionName): NSMutableFontCollection;
  fontCollectionWithName_visibility(name: NSFontCollectionName, visibility: NSFontCollectionVisibility): NSMutableFontCollection;

  fontCollectionWithAllAvailableDescriptors(): NSMutableFontCollection;

}

