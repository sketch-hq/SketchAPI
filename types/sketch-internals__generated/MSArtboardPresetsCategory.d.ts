interface MSArtboardPresetsCategoryUninitialized<InitializedType = MSArtboardPresetsCategory> extends NSObjectUninitialized<MSArtboardPresetsCategory> {
  initWithName_sections(name: NSString | string, sections: NSArray<any> | any[]): InitializedType;
  initWithDictionaryRepresentation(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}
interface MSArtboardPresetsCategory extends NSObject {

  name(): NSString;
  sections(): NSArray<any>;
}
declare const MSArtboardPresetsCategory: {
  alloc(): MSArtboardPresetsCategoryUninitialized;
  class(): MSArtboardPresetsCategory;  categoriesWithContentsOfURL(url: NSURL): NSArray<any>;

}

