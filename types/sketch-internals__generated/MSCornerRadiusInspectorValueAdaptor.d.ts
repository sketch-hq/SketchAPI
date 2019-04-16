interface MSCornerRadiusInspectorValueAdaptorUninitialized<InitializedType = MSCornerRadiusInspectorValueAdaptor> extends MSMathInspectorValueAdaptorUninitialized<MSCornerRadiusInspectorValueAdaptor> {
  initWithModelsController(arrayController: NSArrayController): InitializedType;
}

interface MSCornerRadiusInspectorValueAdaptor extends MSMathInspectorValueAdaptor {
}

declare const MSCornerRadiusInspectorValueAdaptor: {
  alloc(): MSCornerRadiusInspectorValueAdaptorUninitialized;
  class(): MSCornerRadiusInspectorValueAdaptor;
}

