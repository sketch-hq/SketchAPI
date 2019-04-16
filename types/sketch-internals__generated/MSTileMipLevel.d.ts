interface MSTileMipLevelUninitialized<InitializedType = MSTileMipLevel> extends NSObjectUninitialized<MSTileMipLevel> {
  initWithScaleRangeMax(max: CGFloat): InitializedType;
}
interface MSTileMipLevel extends NSObject {
  enqueueRenderableTilesForVisibleRect(visibleRect: NSRect): NSArray<any>;
  countExistingTilesForVisibleRect(visibleRect: NSRect): NSUInteger;
  findWritableTileAt(point: BCIntPoint): MSTile;
  addTile(tile: MSTile): void;
  removeAllTiles(): void;
  removeAllTilesAndClearDirtyRegion(): void;
  removeAllTilesAndResetDirtyRegionToRect(rect: BCIntRect): void;
  isCurrentColorSpaceEqualTo(colorSpace: CGColorSpaceRef): boolean;
  uniteDirtyRect(rect: NSRect): void;
  subtractDirtyRect(rect: BCIntRect): void;

  scaleRangeMax(): CGFloat;
  scale(): CGFloat;
  setScale(scale: CGFloat): void;
  currentColorSpace(): CGColorSpaceRef;
  setCurrentColorSpace(currentColorSpace: CGColorSpaceRef): void;
  clearBeforeUpload(): boolean;
  setClearBeforeUpload(clearBeforeUpload: boolean): void;
  dirtyRegion(): MSRegion;
  tileCount(): NSUInteger;
}
declare const MSTileMipLevel: {
  alloc(): MSTileMipLevelUninitialized;
  class(): MSTileMipLevel;  tileMipLevelWithScaleRangeMax(rangeMax: CGFloat): MSTileMipLevel;

}

