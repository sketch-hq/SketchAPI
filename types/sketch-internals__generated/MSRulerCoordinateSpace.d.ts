interface MSRulerCoordinateSpaceUninitialized<InitializedType = MSRulerCoordinateSpace> extends NSObjectUninitialized<MSRulerCoordinateSpace> {
  initWithLayer(layer: MSLayer): InitializedType;
}
interface MSRulerCoordinateSpace extends NSObject, IMSLayerCoordinateSpace {

  layer(): MSLayer;
}
declare const MSRulerCoordinateSpace: {
  alloc(): MSRulerCoordinateSpaceUninitialized;
  class(): MSRulerCoordinateSpace;
}

