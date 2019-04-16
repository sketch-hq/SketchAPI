interface CATiledLayerUninitialized<InitializedType = CATiledLayer> extends CALayerUninitialized<CATiledLayer> {}
interface CATiledLayer extends CALayer {

  levelsOfDetail(): size_t;
  setLevelsOfDetail(levelsOfDetail: size_t): void;
  levelsOfDetailBias(): size_t;
  setLevelsOfDetailBias(levelsOfDetailBias: size_t): void;
  tileSize(): CGSize;
  setTileSize(tileSize: CGSize): void;
}
declare const CATiledLayer: {
  alloc(): CATiledLayerUninitialized;
  class(): CATiledLayer;  fadeDuration(): CFTimeInterval;

}

