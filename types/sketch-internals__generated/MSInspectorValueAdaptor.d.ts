interface MSInspectorValueAdaptorUninitialized<InitializedType = MSInspectorValueAdaptor> extends NSObjectUninitialized<MSInspectorValueAdaptor> {
  initWithModelsController_valueGetter_valueSetter_modelKeyPathsToWatch(modelsController: NSArrayController, valueGetter: Block, valueSetter: Block, modelKeyPathsToWatch: NSArray<any> | any[] | null): InitializedType;
  initWithModelsController_valueGetter_valueSetter(modelsController: NSArrayController, valueGetter: Block, valueSetter: Block): InitializedType;
  initWithModelsController_modelKeyPath(modelsController: NSArrayController, keyPath: NSString | string): InitializedType;
  initWithModelsController_modelKeyPath_keyPathsToWatch(modelsController: NSArrayController, keyPath: NSString | string, toWatch: NSArray<any> | any[] | null): InitializedType;
}
interface MSInspectorValueAdaptor extends NSObject {
  transformedValuesFromAdaptorValue_contexts_error(adaptorValue: AdaptorValueType, contextsOut: NSPointerArray, error: NSError): NSArray<any>;
  transformAdaptorValue_forModel_context_error(adaptorValue: AdaptorValueType, model: ModelType, context: any, error: NSError): ModelValueType;
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
}

