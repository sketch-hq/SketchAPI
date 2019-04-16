interface MSCoordinateInspectorValueAdaptorUninitialized<InitializedType = MSCoordinateInspectorValueAdaptor> extends MSMathInspectorValueAdaptorUninitialized<MSCoordinateInspectorValueAdaptor> {
  initWithLayerController_layerKeyPath_keyPathsToWatch_axis(layerController: NSArrayController, keyPath: NSString | string, toWatch: NSArray<any> | any[], axis: BCAxis): InitializedType;
  initWithLayerController_valueGetter_valueSetter_layerKeyPathsToWatch_axis(layerController: NSArrayController, valueGetter: Block, valueSetter: Block, layerKeyPathsToWatch: NSArray<any> | any[], axis: BCAxis): InitializedType;
}

interface MSCoordinateInspectorValueAdaptor extends MSMathInspectorValueAdaptor {

  axis(): BCAxis;
}

declare const MSCoordinateInspectorValueAdaptor: {
  alloc(): MSCoordinateInspectorValueAdaptorUninitialized;
  class(): MSCoordinateInspectorValueAdaptor;
}

