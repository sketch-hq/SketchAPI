interface MSRenderingDriverSettingsUninitialized<InitializedType = MSRenderingDriverSettings> extends NSObjectUninitialized<MSRenderingDriverSettings> {
  initWithGridLightColor_gridDarkColor_layoutGridStyle_flowColor_flowTipImage_flowBackImage_flowOtherPageImage(gridLightColor: CGColorRef, gridDarkColor: CGColorRef, layoutGridStyle: MSLayoutGridStyle, flowColor: CGColorRef, tipImage: CGImageRef | null, backImage: CGImageRef | null, otherPageImage: CGImageRef | null): InitializedType;
}
interface MSRenderingDriverSettings extends NSObject {
  flowTipImage(): CGImageRef;
  flowBackImage(): CGImageRef;
  flowOtherPageImage(): CGImageRef;
  flowColor(): CGColorRef;

  layoutGridStyle(): MSLayoutGridStyle;
  gridLightColor(): CGColorRef;
  gridDarkColor(): CGColorRef;
}
declare const MSRenderingDriverSettings: {
  alloc(): MSRenderingDriverSettingsUninitialized;
  class(): MSRenderingDriverSettings;
}

