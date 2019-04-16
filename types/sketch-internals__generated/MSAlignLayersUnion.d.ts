interface MSAlignLayersUnionUninitialized<InitializedType = MSAlignLayersUnion> extends BCRectUninitialized<MSAlignLayersUnion> {}
interface MSAlignLayersUnion extends BCRect {

  layers(): any;
  setLayers(layers: any): void;
}
declare const MSAlignLayersUnion: {
  alloc(): MSAlignLayersUnionUninitialized;
  class(): MSAlignLayersUnion;  unionWithLayers(layers: NSArray<any> | any[]): MSAlignLayersUnion;

}

