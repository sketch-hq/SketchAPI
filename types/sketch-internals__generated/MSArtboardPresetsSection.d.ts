interface MSArtboardPresetsSectionUninitialized<InitializedType = MSArtboardPresetsSection> extends NSObjectUninitialized<MSArtboardPresetsSection> {
  initWithName_presets(name: NSString | string | null, presets: NSArray<any> | any[]): InitializedType;
  initWithDictionaryRepresentation(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}
interface MSArtboardPresetsSection extends NSObject {

  name(): NSString;
  presets(): NSArray<any>;
  dictionaryRepresentation(): NSDictionary<any, any>;
}
declare const MSArtboardPresetsSection: {
  alloc(): MSArtboardPresetsSectionUninitialized;
  class(): MSArtboardPresetsSection;  sectionsWithContentsOfURL(url: NSURL): NSArray<any>;
  writeSections_toURL_error(collections: NSArray<any> | any[], url: NSURL, error: NSError): boolean;

}

