interface MSXMLElementWrapperUninitialized<InitializedType = MSXMLElementWrapper> extends NSObjectUninitialized<MSXMLElementWrapper> {
  initWithName(elementName: NSString | string): InitializedType;
  initWithElement(element: NSXMLElement): InitializedType;
}

interface MSXMLElementWrapper extends NSObject {
  attributeStringForKey(key: NSString | string): NSString;
  setAttributeString_forKey(value: NSString | string, key: NSString | string): void;
  addChild(child: NSXMLNode): void;
  addChildWrapper(child: MSXMLElementWrapper): void;

  element(): NSXMLElement;
  svgId(): NSString;
  setSvgId(svgId: NSString | string): void;
  svgClass(): NSString;
  setSvgClass(svgClass: NSString | string): void;
  style(): NSString;
  setStyle(style: NSString | string): void;
}

declare const MSXMLElementWrapper: {
  alloc(): MSXMLElementWrapperUninitialized;
  class(): MSXMLElementWrapper;
  elementName(): NSString;
  element(): MSXMLElementWrapper;
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

