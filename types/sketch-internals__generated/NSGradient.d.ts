interface NSGradientUninitialized<InitializedType = NSGradient> extends NSObjectUninitialized<NSGradient> {
  initWithStartingColor_endingColor(startingColor: NSColor, endingColor: NSColor): InitializedType;
  initWithColors(colorArray: NSArray<any> | any[]): InitializedType;
  initWithColorsAndLocations(firstColor: NSColor, ...args: any[]): InitializedType;
  initWithColors_atLocations_colorSpace(colorArray: NSArray<any> | any[], locations: CGFloat | null, colorSpace: NSColorSpace): InitializedType;
  initWithCoder(decoder: NSCoder): InitializedType;
}
interface NSGradient extends NSObject, INSCopying, INSSecureCoding {
  drawFromPoint_toPoint_options(startingPoint: NSPoint, endingPoint: NSPoint, options: NSGradientDrawingOptions): void;
  drawInRect_angle(rect: NSRect, angle: CGFloat): void;
  drawInBezierPath_angle(path: NSBezierPath, angle: CGFloat): void;
  drawFromCenter_radius_toCenter_radius_options(startCenter: NSPoint, startRadius: CGFloat, endCenter: NSPoint, endRadius: CGFloat, options: NSGradientDrawingOptions): void;
  drawInRect_relativeCenterPosition(rect: NSRect, relativeCenterPosition: NSPoint): void;
  drawInBezierPath_relativeCenterPosition(path: NSBezierPath, relativeCenterPosition: NSPoint): void;
  getColor_location_atIndex(color: NSColor, location: CGFloat | null, index: NSInteger): void;
  interpolatedColorAtLocation(location: CGFloat): NSColor;
  interpolatedGradientWithExtraStops_function(extraStops: NSUInteger, functionName: GradientInterpolationFunction): NSGradient;

  colorSpace(): NSColorSpace;
  numberOfColorStops(): NSInteger;
}
declare const NSGradient: {
  alloc(): NSGradientUninitialized;
  class(): NSGradient;
}

