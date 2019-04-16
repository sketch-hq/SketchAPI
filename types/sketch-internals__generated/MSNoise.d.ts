interface MSNoiseUninitialized<InitializedType = MSNoise> extends NSObjectUninitialized<MSNoise> {}
interface MSNoise extends NSObject {
}
declare const MSNoise: {
  alloc(): MSNoiseUninitialized;
  class(): MSNoise;  noiseIsOpaqueForType(type: NSInteger): boolean;
  drawWithIntensity_ofType_inRect_zoomValue_context(intensity: CGFloat, type: NSInteger, rect: NSRect, zoomValue: CGFloat, context: CGContextRef): void;
  drawWithIntensity_ofType_inPath_windingRule_zoomValue_context(intensity: CGFloat, type: NSInteger, path: MSPath, windingRule: NSWindingRule, zoomValue: CGFloat, context: CGContextRef): void;

}

