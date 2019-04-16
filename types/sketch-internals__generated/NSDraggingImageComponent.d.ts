interface NSDraggingImageComponentUninitialized<InitializedType = NSDraggingImageComponent> extends NSObjectUninitialized<NSDraggingImageComponent> {
  initWithKey(key: NSDraggingImageComponentKey): InitializedType;
}

interface NSDraggingImageComponent extends NSObject {

  key(): NSDraggingImageComponentKey;
  setKey(key: NSDraggingImageComponentKey): void;
  contents(): any;
  setContents(contents: any): void;
  frame(): NSRect;
  setFrame(frame: NSRect): void;
}

declare const NSDraggingImageComponent: {
  alloc(): NSDraggingImageComponentUninitialized;
  class(): NSDraggingImageComponent;
  draggingImageComponentWithKey(key: NSDraggingImageComponentKey): NSDraggingImageComponent;
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

