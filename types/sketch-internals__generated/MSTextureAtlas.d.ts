interface MSTextureAtlasUninitialized<InitializedType = MSTextureAtlas> extends NSObjectUninitialized<MSTextureAtlas> {
  initWithTextures_colorSpace(textures: NSDictionary<any, any> | {[key: string]: any}, colorSpace: CGColorSpaceRef): InitializedType;
}
interface MSTextureAtlas extends NSObject {
  relativeRectForTextureNamed(name: NSString | string): CGRect;
  absoluteRectForTextureNamed(name: NSString | string): CGRect;
  textureForRenderer(renderer: any): any;
  relativeRectForResizeableTextureNamed_withEdgePaddings(name: NSString | string, paddings: BCEdgePaddings): CGRect;

  textures(): NSDictionary<any, any>;
  absoluteRects(): NSDictionary<any, any>;
  relativeRects(): NSDictionary<any, any>;
  atlasImage(): CGImageRef;
}
declare const MSTextureAtlas: {
  alloc(): MSTextureAtlasUninitialized;
  class(): MSTextureAtlas;
}

