interface MSAttributedStringUninitialized<InitializedType = MSAttributedString> extends NSObjectUninitialized<MSAttributedString> {
  initWithAttributedString_colorSpace_convert(attributedString: NSAttributedString, colorSpace: NSColorSpace, convert: boolean): InitializedType;
  initWithAttributedString_documentColorSpace(attributedString: NSAttributedString, colorSpace: NSColorSpace): InitializedType;
  initWithUnarchiver(unarchiver: MSBaseUnarchiver): InitializedType;
}

interface MSAttributedString extends NSObject, IMSCoding, INSCopying {
  attributedStringByReplacingFontNames(fontNames: NSDictionary<any, any> | {[key: string]: any}): MSAttributedString;
  encodeWithArchiver(archiver: MSBaseArchiver): void;
  copyWithZone(zone: NSZone | null): any;

  attributedString(): NSAttributedString;
  transformedAttributedString(): NSAttributedString;
  fontDescriptors(): NSSet<any>;
  fontNames(): NSSet<any>;
  unavailableFontNames(): NSSet<any>;
  areRequiredFontsAvailable(): boolean;
  string(): NSString;
  archiveReferenceIdentifier_bc(): NSString;
}

declare const MSAttributedString: {
  alloc(): MSAttributedStringUninitialized;
  class(): MSAttributedString;
  encodeAttributesInDictionary(attrs: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  decodeAttributesInDictionary(attrs: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  isRequiredFontAvailableInDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): boolean;
  fontDescriptorInDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): NSFontDescriptor;
  fontNameInDictionary(attributes: NSDictionary<any, any> | {[key: string]: any}): NSString;
  replacementFontDescriptorWithFaceName_size(face: NSString | string, size: CGFloat): NSFontDescriptor;
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

