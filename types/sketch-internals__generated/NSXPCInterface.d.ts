interface NSXPCInterfaceUninitialized<InitializedType = NSXPCInterface> extends NSObjectUninitialized<NSXPCInterface> {}

interface NSXPCInterface extends NSObject {
  setClasses_forSelector_argumentIndex_ofReply(classes: NSSet<any>, sel: string, arg: NSUInteger, ofReply: boolean): void;
  classesForSelector_argumentIndex_ofReply(sel: string, arg: NSUInteger, ofReply: boolean): NSSet<any>;
  setInterface_forSelector_argumentIndex_ofReply(ifc: NSXPCInterface, sel: string, arg: NSUInteger, ofReply: boolean): void;
  interfaceForSelector_argumentIndex_ofReply(sel: string, arg: NSUInteger, ofReply: boolean): NSXPCInterface;

  protocol(): Protocol;
  setProtocol(protocol: Protocol): void;
}

declare const NSXPCInterface: {
  alloc(): NSXPCInterfaceUninitialized;
  class(): NSXPCInterface;
  interfaceWithProtocol(protocol: Protocol): NSXPCInterface;
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

