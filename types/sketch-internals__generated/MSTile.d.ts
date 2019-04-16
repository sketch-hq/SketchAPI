interface MSTileUninitialized<InitializedType = MSTile> extends NSObjectUninitialized<MSTile> {
  initWithRenderer_point(renderer: any, point: BCIntPoint): InitializedType;
}
interface MSTile extends NSObject {
  replaceRegion_withBytes_bytesPerRow(region: BCIntRect, bytes: void, bytesPerRow: NSUInteger): void;

  texture(): any;
  point(): BCIntPoint;
  rectWithImageFragment(): BCIntRect;
}
declare const MSTile: {
  alloc(): MSTileUninitialized;
  class(): MSTile;
}

