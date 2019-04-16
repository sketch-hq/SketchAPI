interface MSShadowRendererCGUninitialized<InitializedType = MSShadowRendererCG> extends NSObjectUninitialized<MSShadowRendererCG> {}
interface MSShadowRendererCG extends NSObject, IMSShadowRenderer {
}
declare const MSShadowRendererCG: {
  alloc(): MSShadowRendererCGUninitialized;
  class(): MSShadowRendererCG;
}

