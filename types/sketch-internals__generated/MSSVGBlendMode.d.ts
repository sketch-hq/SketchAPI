interface MSSVGBlendModeUninitialized<InitializedType = MSSVGBlendMode> extends NSObjectUninitialized<MSSVGBlendMode> {}
interface MSSVGBlendMode extends NSObject {
}
declare const MSSVGBlendMode: {
  alloc(): MSSVGBlendModeUninitialized;
  class(): MSSVGBlendMode;  sketchBlendModeFromSVG(svgValue: NSString | string): MSBlendMode;
  svgFromSketchBlendMode(blendMode: MSBlendMode): NSString;

}

