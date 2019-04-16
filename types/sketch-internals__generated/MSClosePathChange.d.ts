interface MSClosePathChangeUninitialized<InitializedType = MSClosePathChange> extends MSShapeChangeUninitialized<MSClosePathChange> {}

interface MSClosePathChange extends MSShapeChange {
  validateWithContext(context: MSShapeChangeContext): boolean;
  titleForContext(context: MSShapeChangeContext): NSString;
}

declare const MSClosePathChange: {
  alloc(): MSClosePathChangeUninitialized;
  class(): MSClosePathChange;
  toggleClosePath(): MSClosePathChange;
  moveToPoint_options(location: NSPoint, options: MSCurveMoveOptions): MSShapeChange;
  moveByOffset_options(offset: NSSize, options: MSCurveMoveOptions): MSShapeChange;
  moveToLocation_onAxis(location: CGFloat, axis: BCAxis): MSShapeChange;
  moveHandle_toLocation_onAxis(indexPath: NSIndexPath, location: CGFloat, axis: BCAxis): MSShapeChange;
  nudgeWithKey_distance_flags(key: unichar, distance: CGFloat, flags: NSEventModifierFlags): MSShapeChange;
  changeToCurveMode(curveMode: MSCurveMode): MSShapeChange;
  alignToKey(key: NSString | string): MSShapeChange;
  distributeAlongAxis(axis: BCAxis): MSShapeChange;
  deleteHandle(): MSShapeChange;
  customActionWithBlock(block: Block): MSShapeChange;
}

