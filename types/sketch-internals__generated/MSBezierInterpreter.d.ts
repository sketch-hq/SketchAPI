interface MSBezierInterpreterUninitialized<InitializedType = MSBezierInterpreter> extends NSObjectUninitialized<MSBezierInterpreter> {}
interface MSBezierInterpreter extends NSObject {
  points(): NSArray<any>;

  bezierPath(): NSBezierPath;
  setBezierPath(bezierPath: NSBezierPath): void;
  rect(): NSRect;
  setRect(rect: NSRect): void;
}
declare const MSBezierInterpreter: {
  alloc(): MSBezierInterpreterUninitialized;
  class(): MSBezierInterpreter;  pointsFromBezierPath_inRect(bezierPath: NSBezierPath, rect: NSRect): NSArray<any>;

}

