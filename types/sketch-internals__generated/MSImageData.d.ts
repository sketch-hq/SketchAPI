interface MSImageDataUninitialized<InitializedType = MSImageData> extends NSObjectUninitialized<MSImageData> {
  initWithImage(image: NSImage): InitializedType;
  initWithData_sha(data: NSData, sha1: NSData | null): InitializedType;
  initWithLegacyHash(sha1: NSData): InitializedType;
  initWithUnarchiver(unarchiver: MSBaseUnarchiver): InitializedType;
}

interface MSImageData extends NSObject, INSCopying, IMSCoding, IMSJSONArchiverAlternativeFileReference {
  CGImageSuitableForDrawingWithSize_cache_owner(size: CGSize, cache: BCCache, owner: any): CGImageRef;
  CGImageInCache_owner(cache: BCCache, owner: any): CGImageRef;
  isLegacy(): boolean;
  imageDataByCorrectingInvalidGamma(): MSImageData;
  copyWithZone(zone: NSZone | null): any;
  encodeWithArchiver(archiver: MSBaseArchiver): void;
  encodeReferenceInJSONZipArchive(encoder: BCJSONZippedEncoder): void;

  data(): NSData;
  sha1(): NSData;
  image(): NSImage;
  archiveReferenceIdentifier_bc(): NSString;
}

declare const MSImageData: {
  alloc(): MSImageDataUninitialized;
  class(): MSImageData;
  decodeReferenceFromJSONZipArchive_withReference(decoder: BCJSONZippedDecoder, referenceID: NSString | string): any;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

