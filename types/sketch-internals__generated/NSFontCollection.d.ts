interface NSFontCollectionUninitialized<InitializedType = NSFontCollection> extends NSObjectUninitialized<NSFontCollection> {}
interface NSFontCollection extends NSObject, INSCopying, INSMutableCopying, INSCoding {
  matchingDescriptorsWithOptions(options: NSDictionary<any, any> | {[key: string]: any} | null): NSArray<any>;
  matchingDescriptorsForFamily(family: NSString | string): NSArray<any>;
  matchingDescriptorsForFamily_options(family: NSString | string, options: NSDictionary<any, any> | {[key: string]: any} | null): NSArray<any>;

  queryDescriptors(): NSArray<any>;
  exclusionDescriptors(): NSArray<any>;
  matchingDescriptors(): NSArray<any>;
}
declare const NSFontCollection: {
  alloc(): NSFontCollectionUninitialized;
  class(): NSFontCollection;  fontCollectionWithDescriptors(queryDescriptors: NSArray<any> | any[]): NSFontCollection;
  fontCollectionWithLocale(locale: NSLocale): NSFontCollection;
  showFontCollection_withName_visibility_error(collection: NSFontCollection, name: NSFontCollectionName, visibility: NSFontCollectionVisibility, error: NSError): boolean;
  hideFontCollectionWithName_visibility_error(name: NSFontCollectionName, visibility: NSFontCollectionVisibility, error: NSError): boolean;
  renameFontCollectionWithName_visibility_toName_error(name: NSFontCollectionName, visibility: NSFontCollectionVisibility, name2: NSFontCollectionName, error: NSError): boolean;
  fontCollectionWithName(name: NSFontCollectionName): NSFontCollection;
  fontCollectionWithName_visibility(name: NSFontCollectionName, visibility: NSFontCollectionVisibility): NSFontCollection;

  fontCollectionWithAllAvailableDescriptors(): NSFontCollection;
  allFontCollectionNames(): NSArray<any>;

}

