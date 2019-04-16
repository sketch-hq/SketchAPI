interface NSColorSpaceUninitialized<InitializedType = NSColorSpace> extends NSObjectUninitialized<NSColorSpace> {
  initWithICCProfileData(iccData: NSData): InitializedType;
  initWithColorSyncProfile(prof: void): InitializedType;
  initWithCGColorSpace(cgColorSpace: CGColorSpaceRef): InitializedType;
}

interface NSColorSpace extends NSObject, INSSecureCoding {

  ICCProfileData(): NSData;
  colorSyncProfile(): void;
  CGColorSpace(): CGColorSpaceRef;
  numberOfColorComponents(): NSInteger;
  colorSpaceModel(): NSColorSpaceModel;
  localizedName(): NSString;
}

declare const NSColorSpace: {
  alloc(): NSColorSpaceUninitialized;
  class(): NSColorSpace;
  availableColorSpacesWithModel(model: NSColorSpaceModel): NSArray<any>;
  RGBColorSpaceNamed(colorSpaceName: NSString | string): NSColorSpace;
  colorSpaceForSketchColorSpace(modelColorSpace: MSColorSpace): NSColorSpace;
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
  sRGBColorSpace(): NSColorSpace;
  genericGamma22GrayColorSpace(): NSColorSpace;
  extendedSRGBColorSpace(): NSColorSpace;
  extendedGenericGamma22GrayColorSpace(): NSColorSpace;
  displayP3ColorSpace(): NSColorSpace;
  adobeRGB1998ColorSpace(): NSColorSpace;
  genericRGBColorSpace(): NSColorSpace;
  genericGrayColorSpace(): NSColorSpace;
  genericCMYKColorSpace(): NSColorSpace;
  deviceRGBColorSpace(): NSColorSpace;
  deviceGrayColorSpace(): NSColorSpace;
  deviceCMYKColorSpace(): NSColorSpace;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

