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
  class(): NSMutableFontCollection;
  fontCollectionWithDescriptors(queryDescriptors: NSArray<any> | any[]): NSMutableFontCollection;
  fontCollectionWithLocale(locale: NSLocale): NSMutableFontCollection;
  fontCollectionWithName(name: NSFontCollectionName): NSMutableFontCollection;
  fontCollectionWithName_visibility(name: NSFontCollectionName, visibility: NSFontCollectionVisibility): NSMutableFontCollection;
  fontCollectionWithDescriptors(queryDescriptors: NSArray<any> | any[]): NSFontCollection;
  fontCollectionWithLocale(locale: NSLocale): NSFontCollection;
  showFontCollection_withName_visibility_error(collection: NSFontCollection, name: NSFontCollectionName, visibility: NSFontCollectionVisibility, error: MOPointer<NSError>): boolean;
  hideFontCollectionWithName_visibility_error(name: NSFontCollectionName, visibility: NSFontCollectionVisibility, error: MOPointer<NSError>): boolean;
  renameFontCollectionWithName_visibility_toName_error(name: NSFontCollectionName, visibility: NSFontCollectionVisibility, name2: NSFontCollectionName, error: MOPointer<NSError>): boolean;
  fontCollectionWithName(name: NSFontCollectionName): NSFontCollection;
  fontCollectionWithName_visibility(name: NSFontCollectionName, visibility: NSFontCollectionVisibility): NSFontCollection;
  fontCollectionWithAllAvailableDescriptors(): NSMutableFontCollection;
  allFontCollectionNames(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

