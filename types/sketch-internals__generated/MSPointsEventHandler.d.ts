interface MSPointsEventHandlerUninitialized<InitializedType = MSPointsEventHandler> extends MSEventHandlerUninitialized<MSPointsEventHandler> {}

interface MSPointsEventHandler extends MSEventHandler {
  findSelectedLayer(): MSStyledLayer;
  points(): MSPointArray;
  convertPointToUnitCoordinateSpace(mouse: NSPoint): NSPoint;
  point_isNearPoint(p1: NSPoint, p2: NSPoint): boolean;
  pointAtIndex(index: NSUInteger): NSPoint;
  replacePointAtIndex_withPoint(index: NSInteger, newObj: NSPoint): void;
  movePointAtIndex_toLocation_modifierFlags(index: NSInteger, newLocation: NSPoint, flags: NSEventModifierFlags): void;
  indexOfPointAtLocation(location: NSPoint): NSInteger;
  useSnaps(): boolean;
  pointsToSnap(): MSPointArray;
  bounds(): NSRect;
  convertPointToAbsoluteCoordinates(point: NSPoint): NSPoint;
  handleLinesColor(): NSColor;
  handleLinesPath(): NSBezierPath;
  drawHandleAtPoint_index_selected(p: NSPoint, index: NSInteger, selected: boolean): void;
  drawHandleLines(): void;

  layer(): MSStyledLayer;
  setLayer(layer: MSStyledLayer): void;
  indexForSelectedPoint(): NSInteger;
  setIndexForSelectedPoint(indexForSelectedPoint: NSInteger): void;
  coordinateSpace(): MSLayer;
}

declare const MSPointsEventHandler: {
  alloc(): MSPointsEventHandlerUninitialized;
  class(): MSPointsEventHandler;
  eventHandlerWithManager(aManager: MSEventHandlerManager): any;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

