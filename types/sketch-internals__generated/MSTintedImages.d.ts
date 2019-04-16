interface MSTintedImagesUninitialized<InitializedType = MSTintedImages> extends NSObjectUninitialized<MSTintedImages> {
  initWithTheme(theme: MSTheme): InitializedType;
}

interface MSTintedImages extends NSObject {
  hideImageWhenNodeIsSelected_active(selected: boolean, active: boolean): NSImage;
  lockImageWhenNodeIsSelected_active(selected: boolean, active: boolean): NSImage;
  pressedHideImageWhenNodeIsSelected(selected: boolean): NSImage;
  pressedLockImageWhenNodeIsSelected(selected: boolean): NSImage;

  selectedActiveHideImage(): NSImage;
  selectedInactiveHideImage(): NSImage;
  unselectedHideImage(): NSImage;
  pressedHideImage(): NSImage;
  pressedSelectedHideImage(): NSImage;
  selectedActiveLockImage(): NSImage;
  selectedInactiveLockImage(): NSImage;
  unselectedLockImage(): NSImage;
  pressedLockImage(): NSImage;
  pressedSelectedLockImage(): NSImage;
  sidebarAddPageImage(): NSImage;
  sidebarCollapsePageListImage(): NSImage;
  sidebarExpandPageListImage(): NSImage;
  flowBackImage(): NSImage;
  flowOtherPageImage(): NSImage;
}

declare const MSTintedImages: {
  alloc(): MSTintedImagesUninitialized;
  class(): MSTintedImages;
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

