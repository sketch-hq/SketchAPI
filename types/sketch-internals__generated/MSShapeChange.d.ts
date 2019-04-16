interface MSShapeChangeUninitialized<InitializedType = MSShapeChange> extends NSObjectUninitialized<MSShapeChange> {}
interface MSShapeChange extends NSObject {
  executeWithContext(context: MSShapeChangeContext): void;
}
declare const MSShapeChange: {
  alloc(): MSShapeChangeUninitialized;
  class(): MSShapeChange;  moveToPoint_options(location: NSPoint, options: MSCurveMoveOptions): MSShapeChange;
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

