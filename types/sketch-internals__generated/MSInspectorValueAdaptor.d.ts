interface MSInspectorValueAdaptorUninitialized<InitializedType = MSInspectorValueAdaptor> extends NSObjectUninitialized<MSInspectorValueAdaptor> {
  initWithModelsController_valueGetter_valueSetter_modelKeyPathsToWatch(modelsController: NSArrayController, valueGetter: Block, valueSetter: Block, modelKeyPathsToWatch: NSArray<any> | any[] | null): InitializedType;
  initWithModelsController_valueGetter_valueSetter(modelsController: NSArrayController, valueGetter: Block, valueSetter: Block): InitializedType;
  initWithModelsController_modelKeyPath(modelsController: NSArrayController, keyPath: NSString | string): InitializedType;
  initWithModelsController_modelKeyPath_keyPathsToWatch(modelsController: NSArrayController, keyPath: NSString | string, toWatch: NSArray<any> | any[] | null): InitializedType;
}

interface MSInspectorValueAdaptor extends NSObject {
  transformedValuesFromAdaptorValue_contexts_error(adaptorValue: AdaptorValueType, contextsOut: MOPointer<NSPointerArray>, error: MOPointer<NSError>): NSArray<any>;
  transformAdaptorValue_forModel_context_error(adaptorValue: AdaptorValueType, model: ModelType, context: any, error: MOPointer<NSError>): ModelValueType;
  updateValues(): void;
  removeKVOObservers(): void;
  addChangeObserver(observer: any): void;
  removeChangeObserver(observer: any): void;

  modelsController(): NSArrayController;
  value(): AdaptorValueType;
  setValue(value: AdaptorValueType): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  showsDefaultAlerts(): boolean;
  setShowsDefaultAlerts(showsDefaultAlerts: boolean): void;
  view(): NSView;
  setView(view: NSView): void;
}

declare const MSInspectorValueAdaptor: {
  alloc(): MSInspectorValueAdaptorUninitialized;
  class(): MSInspectorValueAdaptor;
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

