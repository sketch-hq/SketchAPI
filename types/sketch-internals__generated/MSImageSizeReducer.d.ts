interface MSImageSizeReducerUninitialized<InitializedType = MSImageSizeReducer> extends NSObjectUninitialized<MSImageSizeReducer> {}
interface MSImageSizeReducer extends NSObject {
}
declare const MSImageSizeReducer: {
  alloc(): MSImageSizeReducerUninitialized;
  class(): MSImageSizeReducer;  reduceImageSizeOfLayers_windowForSheet_completionBlock(layers: NSArray<any> | any[], windowForSheet: NSWindow | null, completionBlock: BCVoidBlock | null): void;
  largestSizeForImagesMapTableFromOwners(layers: NSArray<any> | any[]): NSMapTable<any, any>;

}

