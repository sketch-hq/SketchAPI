interface NSColorPickerUninitialized<InitializedType = NSColorPicker> extends NSObjectUninitialized<NSColorPicker> {
  initWithPickerMask_colorPanel(mask: NSUInteger, owningColorPanel: NSColorPanel): InitializedType;
  initWithPickerMask_colorPanel(mask: NSUInteger, owningColorPanel: NSColorPanel): InitializedType;
}

interface NSColorPicker extends NSObject, INSColorPickingDefault {
  insertNewButtonImage_in(newButtonImage: NSImage, buttonCell: NSButtonCell): void;
  viewSizeChanged(sender: any | null): void;
  attachColorList(colorList: NSColorList): void;
  detachColorList(colorList: NSColorList): void;
  setMode(mode: NSColorPanelMode): void;
  provideNewButtonImage(): NSImage;
  insertNewButtonImage_in(newButtonImage: NSImage, buttonCell: NSButtonCell): void;
  viewSizeChanged(sender: any | null): void;
  alphaControlAddedOrRemoved(sender: any | null): void;
  attachColorList(colorList: NSColorList): void;
  detachColorList(colorList: NSColorList): void;
  setMode(mode: NSColorPanelMode): void;
  buttonToolTip(): NSString;
  minContentSize(): NSSize;

  colorPanel(): NSColorPanel;
  provideNewButtonImage(): NSImage;
  buttonToolTip(): NSString;
  minContentSize(): NSSize;
}

declare const NSColorPicker: {
  alloc(): NSColorPickerUninitialized;
  class(): NSColorPicker;
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

