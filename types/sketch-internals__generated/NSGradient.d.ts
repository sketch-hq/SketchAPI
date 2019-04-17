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
  getColor_location_atIndex(color: MOPointer<NSColor>, location: CGFloat | null, index: NSInteger): void;
  interpolatedColorAtLocation(location: CGFloat): NSColor;
  interpolatedGradientWithExtraStops_function(extraStops: NSUInteger, functionName: GradientInterpolationFunction): NSGradient;
  copyWithZone(zone: NSZone | null): any;

  colorSpace(): NSColorSpace;
  numberOfColorStops(): NSInteger;
}

declare const NSGradient: {
  alloc(): NSGradientUninitialized;
  class(): NSGradient;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

