interface NSBezierPathUninitialized<InitializedType = NSBezierPath> extends NSObjectUninitialized<NSBezierPath> {}

interface NSBezierPath extends NSObject, INSCopying, INSSecureCoding {
  moveToPoint(point: NSPoint): void;
  lineToPoint(point: NSPoint): void;
  curveToPoint_controlPoint1_controlPoint2(endPoint: NSPoint, controlPoint1: NSPoint, controlPoint2: NSPoint): void;
  closePath(): void;
  removeAllPoints(): void;
  relativeMoveToPoint(point: NSPoint): void;
  relativeLineToPoint(point: NSPoint): void;
  relativeCurveToPoint_controlPoint1_controlPoint2(endPoint: NSPoint, controlPoint1: NSPoint, controlPoint2: NSPoint): void;
  getLineDash_count_phase(pattern: CGFloat | null, count: NSInteger | null, phase: CGFloat | null): void;
  setLineDash_count_phase(pattern: CGFloat | null, count: NSInteger, phase: CGFloat): void;
  stroke(): void;
  fill(): void;
  addClip(): void;
  setClip(): void;
  transformUsingAffineTransform(transform: NSAffineTransform): void;
  elementAtIndex_associatedPoints(index: NSInteger, points: NSPointArray | null): NSBezierPathElement;
  elementAtIndex(index: NSInteger): NSBezierPathElement;
  setAssociatedPoints_atIndex(points: NSPointArray | null, index: NSInteger): void;
  appendBezierPath(path: NSBezierPath): void;
  appendBezierPathWithRect(rect: NSRect): void;
  appendBezierPathWithPoints_count(points: NSPointArray, count: NSInteger): void;
  appendBezierPathWithOvalInRect(rect: NSRect): void;
  appendBezierPathWithArcWithCenter_radius_startAngle_endAngle_clockwise(center: NSPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, clockwise: boolean): void;
  appendBezierPathWithArcWithCenter_radius_startAngle_endAngle(center: NSPoint, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat): void;
  appendBezierPathWithArcFromPoint_toPoint_radius(point1: NSPoint, point2: NSPoint, radius: CGFloat): void;
  appendBezierPathWithCGGlyph_inFont(glyph: CGGlyph, font: NSFont): void;
  appendBezierPathWithCGGlyphs_count_inFont(glyphs: CGGlyph, count: NSInteger, font: NSFont): void;
  appendBezierPathWithRoundedRect_xRadius_yRadius(rect: NSRect, xRadius: CGFloat, yRadius: CGFloat): void;
  containsPoint(point: NSPoint): boolean;
  cachesBezierPath(): boolean;
  setCachesBezierPath(flag: boolean): void;
  appendBezierPathWithGlyph_inFont(glyph: NSGlyph, font: NSFont): void;
  appendBezierPathWithGlyphs_count_inFont(glyphs: NSGlyph, count: NSInteger, font: NSFont): void;
  appendBezierPathWithPackedGlyphs(packedGlyphs: string): void;
  strokeOutside(): void;
  strokeInside(): void;
  outlinePath(): NSBezierPath;
  drawInnerShadow(shadow: NSShadow): void;
  bezierPathByGrowingBy(offset: CGFloat): NSBezierPath;
  bezierPathWithOuterPathOfSize(amount: CGFloat): NSBezierPath;
  safeBounds(): NSRect;
  isClosed(): boolean;
  clipInBlock(block: BCVoidBlock): void;
  writeDebugFileNamed(name: NSString | string): void;
  bezierPathByCurveFitting(): NSBezierPath;
  booleanOp_withPath(op: MSBooleanOperation, otherPath: NSBezierPath): NSBezierPath;
  booleanUnionWith(otherPath: NSBezierPath): NSBezierPath;
  booleanIntersectWith(otherPath: NSBezierPath): NSBezierPath;
  booleanSubtractWith(otherPath: NSBezierPath): NSBezierPath;
  booleanExclusiveOrWith(otherPath: NSBezierPath): NSBezierPath;
  bezierPathBySubtractingPaths(paths: NSArray<any> | any[]): NSBezierPath;
  bezierPathByMakingClockwiseIfNecessary(): NSBezierPath;
  bezierPathByMakingAntiClockwiseIfNecessary(): NSBezierPath;
  subPathsOrderedBySizeAfterOutlining(): NSArray<any>;
  debugScale_ms(): CGFloat;
  appendSquareAtPoint_ms_size_scale(point: NSPoint, size: CGFloat, scale: CGFloat): void;
  appendCircleAtPoint_ms_radius_scale(point: NSPoint, radius: CGFloat, scale: CGFloat): void;
  appendArrowAtPoint_ms_tangent_size_scale(point: NSPoint, tangent: BCLine, size: CGFloat, scale: CGFloat): void;
  enumerator(): any;
  reverseEnumerator(): any;
  itemAtIndex(index: NSInteger): any;
  lastItem(): any;
  appendBezierPathItem(item: any): void;
  bezierCurves(): NSArray<any>;
  customIsEqual(other: NSBezierPath): boolean;
  animatedGIFRepresentation_ms(): NSData;
  JSONRepresetation_ms(): any;
  JSONDescription_ms(): NSString;
  lastPoint(): NSPoint;
  firstPoint(): NSPoint;
  slopeOnPathAtLength(length: CGFloat): CGFloat;
  pointOnPathAtLength(length: CGFloat): NSPoint;
  pointOnPathAtLength_slope(length: CGFloat, slope: CGFloat): NSPoint;
  bezierPathByTrimmingFromLength(trimLength: CGFloat): NSBezierPath;
  bezierPathByTrimmingFromLength_withMaximumError(trimLength: CGFloat, maxError: CGFloat): NSBezierPath;
  bezierPathByTrimmingToLength(trimLength: CGFloat): NSBezierPath;
  bezierPathByTrimmingToLength_withMaximumError(trimLength: CGFloat, maxError: CGFloat): NSBezierPath;
  bezierPathFromIndex_toIndex(from: NSUInteger, to: NSUInteger): NSBezierPath;
  length(): CGFloat;
  lengthWithMaximumError(maxError: CGFloat): CGFloat;
  appendBezierPathByRemovingMoveToPoint(path: NSBezierPath): void;
  isEqualToBezierPath(bezierPath: NSBezierPath): boolean;
  pointAtIndex(index: NSInteger): NSPoint;
  subDivideAtPoint(aPoint: NSPoint): NSArray<any>;
  bezierPathByApplyingModifierBlock(block: MSBezierPathModifierBlock): NSBezierPath;
  drawDebugWithZoom___unused(zoom: CGFloat): void;
  scaleBy(zoom: CGFloat): NSBezierPath;
  subPaths(): NSArray<any>;
  debugWriteToFileNamed(name: NSString | string): void;
  strokeWithWidth(lineWidth: CGFloat): void;
  addSVGArcWithAngle_radius_from_to_largeArc_sweep(angle: CGFloat, radius: NSSize, from: NSPoint, to: NSPoint, largeArcFlag: boolean, sweepFlag: boolean): void;
  svgPathAttribute(): NSXMLNode;
  fb_union(path: NSBezierPath): NSBezierPath;
  fb_intersect(path: NSBezierPath): NSBezierPath;
  fb_difference(path: NSBezierPath): NSBezierPath;
  fb_xor(path: NSBezierPath): NSBezierPath;
  fb_fitCurve(errorThreshold: CGFloat): NSBezierPath;
  fb_simplify(threshold: CGFloat): NSBezierPath;
  fb_pointAtIndex(index: NSUInteger): NSPoint;
  fb_elementAtIndex(index: NSUInteger): NSBezierElement;
  fb_subpathWithRange(range: NSRange): NSBezierPath;
  fb_copyAttributesFrom(path: NSBezierPath): void;
  fb_appendPath(path: NSBezierPath): void;
  fb_appendElement(element: NSBezierElement): void;
  copyWithZone(zone: NSZone | null): any;

  lineWidth(): CGFloat;
  setLineWidth(lineWidth: CGFloat): void;
  lineCapStyle(): NSLineCapStyle;
  setLineCapStyle(lineCapStyle: NSLineCapStyle): void;
  lineJoinStyle(): NSLineJoinStyle;
  setLineJoinStyle(lineJoinStyle: NSLineJoinStyle): void;
  windingRule(): NSWindingRule;
  setWindingRule(windingRule: NSWindingRule): void;
  miterLimit(): CGFloat;
  setMiterLimit(miterLimit: CGFloat): void;
  flatness(): CGFloat;
  setFlatness(flatness: CGFloat): void;
  bezierPathByFlatteningPath(): NSBezierPath;
  bezierPathByReversingPath(): NSBezierPath;
  empty(): boolean;
  currentPoint(): NSPoint;
  controlPointBounds(): NSRect;
  bounds(): NSRect;
  elementCount(): NSInteger;
}

declare const NSBezierPath: {
  alloc(): NSBezierPathUninitialized;
  class(): NSBezierPath;
  bezierPath(): NSBezierPath;
  bezierPathWithRect(rect: NSRect): NSBezierPath;
  bezierPathWithOvalInRect(rect: NSRect): NSBezierPath;
  bezierPathWithRoundedRect_xRadius_yRadius(rect: NSRect, xRadius: CGFloat, yRadius: CGFloat): NSBezierPath;
  fillRect(rect: NSRect): void;
  strokeRect(rect: NSRect): void;
  clipRect(rect: NSRect): void;
  strokeLineFromPoint_toPoint(point1: NSPoint, point2: NSPoint): void;
  drawPackedGlyphs_atPoint(packedGlyphs: string, point: NSPoint): void;
  bezierPathWithCGPath_bc(path: CGPathRef): NSBezierPath;
  bezierPathFromPoint_toPoint(p1: NSPoint, p2: NSPoint): NSBezierPath;
  bezierCurveFromPoint_toPoint_controlPoint1_controlPoint2(from: NSPoint, to: NSPoint, cp1: NSPoint, cp2: NSPoint): NSBezierPath;
  bezierPathWithJSON_ms(json: any): NSBezierPath;
  bezierPathWithJSONString_ms(json: NSString | string): NSBezierPath;
  bezierPathWithPath(path: MSPath): NSBezierPath;
  bezierPathWithSubPaths(subPaths: NSArray<any> | any[]): NSBezierPath;
  bezierPathFromSVGString(contents: NSString | string): NSBezierPath;
  bezierPathFromEPSString(aString: NSString | string): NSBezierPath;
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
  defaultMiterLimit(): CGFloat;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultMiterLimit(defaultMiterLimit: CGFloat): void;
  defaultFlatness(): CGFloat;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultFlatness(defaultFlatness: CGFloat): void;
  defaultWindingRule(): NSWindingRule;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultWindingRule(defaultWindingRule: NSWindingRule): void;
  defaultLineCapStyle(): NSLineCapStyle;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultLineCapStyle(defaultLineCapStyle: NSLineCapStyle): void;
  defaultLineJoinStyle(): NSLineJoinStyle;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultLineJoinStyle(defaultLineJoinStyle: NSLineJoinStyle): void;
  defaultLineWidth(): CGFloat;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setDefaultLineWidth(defaultLineWidth: CGFloat): void;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

