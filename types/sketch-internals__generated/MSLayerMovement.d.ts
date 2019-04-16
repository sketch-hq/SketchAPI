interface MSLayerMovementUninitialized<InitializedType = MSLayerMovement> extends NSObjectUninitialized<MSLayerMovement> {}

interface MSLayerMovement extends NSObject {
}

declare const MSLayerMovement: {
  alloc(): MSLayerMovementUninitialized;
  class(): MSLayerMovement;
  moveForward(layers: NSArray<any> | any[]): void;
  moveBackward(layers: NSArray<any> | any[]): void;
  canMoveLayerUpHierarchy(layer: MSLayer): boolean;
  moveUpHierarchy(layers: NSArray<any> | any[]): void;
  canMoveLayerToTopOfHierarchy(layer: MSLayer): boolean;
  moveToTopOfHierarchy(layers: NSArray<any> | any[]): void;
  canMoveLayersForward(layers: NSArray<any> | any[]): boolean;
  canMoveLayersBackward(layers: NSArray<any> | any[]): boolean;
  moveToFront(layers: NSArray<any> | any[]): void;
  moveToBack(layers: NSArray<any> | any[]): void;
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

