interface MSMaskWithShapeUninitialized<InitializedType = MSMaskWithShape> extends NSObjectUninitialized<MSMaskWithShape> {}
interface MSMaskWithShape extends NSObject {
}
declare const MSMaskWithShape: {
  alloc(): MSMaskWithShapeUninitialized;
  class(): MSMaskWithShape;  createMaskWithShapeForLayers(layers: MSLayerArray): MSLayer;

}

