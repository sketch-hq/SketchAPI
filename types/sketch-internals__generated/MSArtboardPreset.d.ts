interface MSArtboardPresetUninitialized<InitializedType = MSArtboardPreset> extends NSObjectUninitialized<MSArtboardPreset> {
  initWithName_size_imageName(name: NSString | string, size: NSSize, imageName: NSString | string | null): InitializedType;
  initWithDictionaryRepresentation(dictionary: NSDictionary<any, any> | {[key: string]: any}): InitializedType;
}
interface MSArtboardPreset extends NSObject, INSCopying {
  oppositeOrientationPreset(): MSArtboardPreset;

  name(): NSString;
  setName(name: NSString | string): void;
  layerName(): NSString;
  size(): NSSize;
  setSize(size: NSSize): void;
  sizeDescription(): NSString;
  offersLandscapeVariant(): boolean;
  allowResizedMatching(): boolean;
  imageName(): NSString;
  image(): NSImage;
  tooltip(): NSString;
  isSizeToFit(): boolean;
  isNew(): boolean;
  dictionaryRepresentation(): NSDictionary<any, any>;
}
declare const MSArtboardPreset: {
  alloc(): MSArtboardPresetUninitialized;
  class(): MSArtboardPreset;  sizeToFitPresetWithName_size(name: NSString | string, size: NSSize): MSArtboardPreset;

}

