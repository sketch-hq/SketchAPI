interface MSGridRendererCGUninitialized<InitializedType = MSGridRendererCG> extends NSObjectUninitialized<MSGridRendererCG> {
  initWithLightColor_darkColor(lightColor: CGColorRef, darkColor: CGColorRef): InitializedType;
}
interface MSGridRendererCG extends NSObject, IMSGridRenderer {

  lightColor(): CGColorRef;
  darkColor(): CGColorRef;
}
declare const MSGridRendererCG: {
  alloc(): MSGridRendererCGUninitialized;
  class(): MSGridRendererCG;
}

