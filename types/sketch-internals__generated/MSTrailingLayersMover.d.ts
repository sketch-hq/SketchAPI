interface MSTrailingLayersMoverUninitialized<InitializedType = MSTrailingLayersMover> extends NSObjectUninitialized<MSTrailingLayersMover> {}
interface MSTrailingLayersMover extends NSObject {
}
declare const MSTrailingLayersMover: {
  alloc(): MSTrailingLayersMoverUninitialized;
  class(): MSTrailingLayersMover;  changeFrameForLayers_inBlock(layers: NSArray<any> | any[], block: BCVoidBlock): void;

}

