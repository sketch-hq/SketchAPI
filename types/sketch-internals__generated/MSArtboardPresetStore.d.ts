interface MSArtboardPresetStoreUninitialized<InitializedType = MSArtboardPresetStore> extends NSObjectUninitialized<MSArtboardPresetStore> {}
interface MSArtboardPresetStore extends NSObject {
  presetWithSize_preferredCategory(size: NSSize, preferredCategory: MSArtboardPresetsCategory | null): MSArtboardPreset;
  resizablePresetMatchingSize_preferredCategory(size: NSSize, preferredCategory: MSArtboardPresetsCategory | null): MSArtboardPreset;
  savePreset_error(newPreset: MSArtboardPreset, error: NSError): boolean;
  removePreset_error(aPreset: MSArtboardPreset, error: NSError): boolean;
  suggestedNameForUserPreset(): NSString;
  presetWithName_matchingSize(presetName: NSString | string, size: NSSize): MSArtboardPreset;

  categories(): NSArray<any>;
  customPresetsCategory(): MSArtboardPresetsCategory;
}
declare const MSArtboardPresetStore: {
  alloc(): MSArtboardPresetStoreUninitialized;
  class(): MSArtboardPresetStore;
  systemCategories(): NSArray<any>;
  setSystemCategories(systemCategories: NSArray<any> | any[]): void;
  indexOfLastSelectedCategory(): NSUInteger;
  setIndexOfLastSelectedCategory(indexOfLastSelectedCategory: NSUInteger): void;

}

