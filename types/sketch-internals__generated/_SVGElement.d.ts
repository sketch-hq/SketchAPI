interface _SVGElementUninitialized<InitializedType = _SVGElement> extends NSObjectUninitialized<_SVGElement> {}

interface _SVGElement extends NSObject {
  primitiveAddChildrenObject(object: any): void;
  primitiveRemoveChildrenObject(object: any): void;
  primitiveAddLinkedObject(object: any): void;
  primitiveRemoveLinkedObject(object: any): void;
  primitiveSetParent(parent: any): void;

  desc(): NSString;
  setDesc(desc: NSString | string): void;
  identifier(): NSString;
  setIdentifier(identifier: NSString | string): void;
  index(): number;
  setIndex(index: number): void;
  title(): NSString;
  setTitle(title: NSString | string): void;
  type(): NSString;
  setType(type: NSString | string): void;
  children(): NSSet<any>;
  setChildren(children: NSSet<any>): void;
  linked(): NSSet<any>;
  setLinked(linked: NSSet<any>): void;
  parent(): SVGElement;
  setParent(parent: SVGElement): void;
}

declare const _SVGElement: {
  alloc(): _SVGElementUninitialized;
  class(): _SVGElement;
  propertyNames(): NSArray<any>;
  relationshipNames(): NSArray<any>;
  attributeNames(): NSArray<any>;
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

