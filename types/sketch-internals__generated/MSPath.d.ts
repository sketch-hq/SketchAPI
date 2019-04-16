interface MSPathUninitialized<InitializedType = MSPath> extends NSObjectUninitialized<MSPath> {
  initWithCGPath(pathRef: CGPathRef): InitializedType;
  initWithContours(contours: NSArray<any> | any[]): InitializedType;
  initWithRect(rect: CGRect): InitializedType;
  initWithRoundedRect_radius(rect: CGRect, radius: CGFloat): InitializedType;
  initWithSquircleInRect_radius(rect: CGRect, radius: CGFloat): InitializedType;
  initWithEllipseInRect(rect: CGRect): InitializedType;
  initWithLineFrom_to(point1: CGPoint, point2: CGPoint): InitializedType;
  initWithCurveFromPoint_to_controlPoint1_controlPoint2(point: CGPoint, to: CGPoint, controlPoint1: CGPoint, controlPoint2: CGPoint): InitializedType;
  initWithPoints_pointCount_close(points: CGPoint, pointCount: number, close: boolean): InitializedType;
  initWithBezierPath(bezierPath: NSBezierPath): InitializedType;
}

interface MSPath extends NSObject, INSCopying {
  outlinePathWithBorderPosition_lineWidth_borderOptions(borderPosition: MSBorderPositionType, lineWidth: CGFloat, options: MSImmutableStyleBorderOptions): MSPath;
  booleanOp_withPath(op: MSBooleanOperation, otherPath: MSPath): MSPath;
  booleanUnionWith(otherPath: MSPath): MSPath;
  booleanIntersectWith(otherPath: MSPath): MSPath;
  booleanSubtractWith(otherPath: MSPath): MSPath;
  booleanExclusiveOrWith(otherPath: MSPath): MSPath;
  FBBezierGraph(): FBBezierGraph;
  shadowPathForStrokeType_lineWidth(strokeType: MSShadowBorderType, lineWidth: CGFloat): MSPath;
  shadowPathWithSpread(spread: CGFloat): MSPath;
  shadowPathWithSpread_borderOptions_strokeType_lineWidth(spread: CGFloat, borderOptions: MSImmutableStyleBorderOptions, strokeType: MSShadowBorderType, lineWidth: CGFloat): MSPath;
  copyWithZone(zone: NSZone | null): MSPath;
  transformedPathUsingAffineTransform(transform: CGAffineTransform): MSPath;
  transformedPathUsingMapBlock(map: Block): MSPath;
  pathWithInset(inset: CGFloat): MSPath;
  pathWithInset_joinStrategy(inset: CGFloat, strategy: MSBezierJoinStrategy): MSPath;
  outlinePathWithWidth(width: CGFloat): MSPath;
  outlinePathWithWidth_lineCap_lineJoin(width: CGFloat, lineCap: CGLineCap, lineJoin: CGLineJoin): MSPath;
  pathByRemovingSubsequentMoveToComponents(): MSPath;
  pathByCuttingBeforeIndex(index: NSUInteger): MSPath;
  pathByScalingToBounds(bounds: CGRect): MSPath;
  reversedPath(): MSPath;
  pathByJoiningWithPath(path: MSPath): MSPath;
  pointAtIndex(index: NSUInteger): CGPoint;
  pointOnPathAtLength(length: CGFloat): CGPoint;
  length(): CGFloat;
  startPoint(): CGPoint;
  endPoint(): CGPoint;
  bezierIndexForPoint_tolerance(point: CGPoint, tolerance: CGFloat): NSUInteger;
  containsPoint(point: CGPoint): boolean;
  isClosed(): boolean;
  pointsInRect(rect: NSRect): NSArray<any>;
  elementAtIndex(index: NSUInteger): MSCGPathElement;
  isEqualToPath(path: MSPath): boolean;
  isEqualToPath_epsilon(path: MSPath, epsilon: CGFloat): boolean;
  clipContext_windingRule_inBlock(context: CGContextRef, windingRule: NSWindingRule, block: Block): void;
  addClipForWindingRule_context(windingRule: NSWindingRule, context: CGContextRef): void;
  outerPathWithRect(rect: CGRect): MSPath;
  pathWithOuterPathOfSize(amount: CGFloat): MSPath;
  insetPathBy(inset: CGFloat): MSPath;
  pathByGrowingBy(offset: CGFloat): MSPath;
  pathWithDashPattern(dashPattern: NSArray<any> | any[]): MSPath;
  shadowPathForStrokeType_lineWidth_cacheObject_context(strokeType: MSShadowBorderType, lineWidth: CGFloat, cacheObject: any, context: MSRenderingContext): MSPath;
  shadowPathWithSpread_cacheObject_context(spread: CGFloat, cacheObject: any, context: MSRenderingContext): MSPath;
  shadowPathWithSpread_borderOptions_strokeType_lineWidth_cacheObject_context(spread: CGFloat, borderOptions: MSImmutableStyleBorderOptions, strokeType: MSShadowBorderType, lineWidth: CGFloat, cacheObject: any, context: MSRenderingContext): MSPath;
  copyWithZone(zone: NSZone | null): any;

  CGPath(): CGPathRef;
  isEmpty(): boolean;
  elementCount(): NSUInteger;
  contours(): NSArray<any>;
  isRectangular(): boolean;
  bounds(): CGRect;
  controlPointBounds(): CGRect;
  safeBounds(): CGRect;
  subpaths(): NSArray<any>;
}

declare const MSPath: {
  alloc(): MSPathUninitialized;
  class(): MSPath;
  pathWithFBBezierGraph(graph: FBBezierGraph): MSPath;
  pathWithSubpaths(subpaths: NSArray<any> | any[]): MSPath;
  pathWithSegments_closed(segments: NSArray<any> | any[], closed: boolean): MSPath;
  pathWithContours(contours: NSArray<any> | any[]): MSPath;
  pathWithRect(rect: CGRect): MSPath;
  pathWithEllipseInRect(rect: CGRect): MSPath;
  pathWithCGPath(pathRef: CGPathRef): MSPath;
  pathWithBezierPath(bezierPath: NSBezierPath): MSPath;
  pathWithLineFrom_to(point1: CGPoint, point2: CGPoint): MSPath;
  pathWithCurveFromPoint_to_controlPoint1_controlPoint2(point: CGPoint, to: CGPoint, controlPoint1: CGPoint, controlPoint2: CGPoint): MSPath;
  pathWithPoints_pointCount_close(points: CGPoint, pointCount: number, close: boolean): MSPath;
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
  accessInstanceVariablesDirectly(): boolean;

}

