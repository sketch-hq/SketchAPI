interface NSFontDescriptorUninitialized<InitializedType = NSFontDescriptor> extends NSObjectUninitialized<NSFontDescriptor> {
  initWithFontAttributes(attributes: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}

interface NSFontDescriptor extends NSObject, INSCopying, INSSecureCoding {
  objectForKey(attribute: NSFontDescriptorAttributeName): any;
  matchingFontDescriptorsWithMandatoryKeys(mandatoryKeys: NSSet<any> | null): NSArray<any>;
  matchingFontDescriptorWithMandatoryKeys(mandatoryKeys: NSSet<any> | null): NSFontDescriptor;
  fontDescriptorByAddingAttributes(attributes: NSDictionary<any, any> | {[key: string]: any}): NSFontDescriptor;
  fontDescriptorWithSymbolicTraits(symbolicTraits: NSFontDescriptorSymbolicTraits): NSFontDescriptor;
  fontDescriptorWithSize(newPointSize: CGFloat): NSFontDescriptor;
  fontDescriptorWithMatrix(matrix: NSAffineTransform): NSFontDescriptor;
  fontDescriptorWithFace(newFace: NSString | string): NSFontDescriptor;
  fontDescriptorWithFamily(newFamily: NSString | string): NSFontDescriptor;
  copyWithZone(zone: NSZone | null): any;

  postscriptName(): NSString;
  pointSize(): CGFloat;
  matrix(): NSAffineTransform;
  symbolicTraits(): NSFontDescriptorSymbolicTraits;
  requiresFontAssetRequest(): boolean;
  fontAttributes(): NSDictionary<any, any>;
}

declare const NSFontDescriptor: {
  alloc(): NSFontDescriptorUninitialized;
  class(): NSFontDescriptor;
  fontDescriptorWithFontAttributes(attributes: NSDictionary<any, any> | {[key: string]: any} | null): NSFontDescriptor;
  fontDescriptorWithName_size(fontName: NSString | string, size: CGFloat): NSFontDescriptor;
  fontDescriptorWithName_matrix(fontName: NSString | string, matrix: NSAffineTransform): NSFontDescriptor;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

