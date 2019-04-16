interface MSBezierBuilderUninitialized<InitializedType = MSBezierBuilder> extends NSObjectUninitialized<MSBezierBuilder> {
  initWithPointRadiusBehavior(pointRadiusBehaviour: MSPointRadiusBehaviour): InitializedType;
}
interface MSBezierBuilder extends NSObject {
  bezierPath(): NSBezierPath;
  path(): MSPath;
  _bezierPath(): NSBezierPath;

  pointRadiusBehaviour(): MSPointRadiusBehaviour;
}
declare const MSBezierBuilder: {
  alloc(): MSBezierBuilderUninitialized;
  class(): MSBezierBuilder;  bezierPathWithPoints_inRect_shouldClose_pointRadiusBehaviour(points: NSArray<any> | any[], rect: NSRect, shouldClose: boolean, pointRadiusBehaviour: MSPointRadiusBehaviour): NSBezierPath;
  pathWithPoints_inRect_shouldClose_pointRadiusBehaviour(points: NSArray<any> | any[], rect: NSRect, shouldClose: boolean, pointRadiusBehaviour: MSPointRadiusBehaviour): MSPath;
  bezierPathForSegmentAtIndex_inPath_inRect(index: NSUInteger, shapePath: MSShapePathLayer, rect: NSRect): NSBezierPath;

}

