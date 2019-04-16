interface MSMetalTextureUninitialized<InitializedType = MSMetalTexture> extends NSObjectUninitialized<MSMetalTexture> {
  initWithMetalTexture(texture: any): InitializedType;
}
interface MSMetalTexture extends NSObject, IMSGPUTexture {

  metalTexture(): any;
}
declare const MSMetalTexture: {
  alloc(): MSMetalTextureUninitialized;
  class(): MSMetalTexture;
}

