interface SVGPathInterpreterUninitialized<InitializedType = SVGPathInterpreter> extends NSObjectUninitialized<SVGPathInterpreter> {}
interface SVGPathInterpreter extends NSObject {
  bezierPathFromCommands_isPathClosed(commands: NSString | string, isClosed: boolean): NSBezierPath;
  bezierPathFromPoints(points: NSString | string): NSBezierPath;
}
declare const SVGPathInterpreter: {
  alloc(): SVGPathInterpreterUninitialized;
  class(): SVGPathInterpreter;
}

