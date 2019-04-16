interface MSRotateEventHandlerUninitialized<InitializedType = MSRotateEventHandler> extends MSNormalBaseEventHandlerUninitialized<MSRotateEventHandler> {}

interface MSRotateEventHandler extends MSNormalBaseEventHandler, INSTouchBarDelegate {
  touchBar_makeItemForIdentifier(touchBar: NSTouchBar, identifier: NSTouchBarItemIdentifier): NSTouchBarItem;

  exitOnMouseUp(): boolean;
  setExitOnMouseUp(exitOnMouseUp: boolean): void;
  disableMoving(): boolean;
  setDisableMoving(disableMoving: boolean): void;
  normalEventHandler(): MSNormalEventHandler;
  setNormalEventHandler(normalEventHandler: MSNormalEventHandler): void;
  rotationCenterPoint(): NSPoint;
  setRotationCenterPoint(rotationCenterPoint: NSPoint): void;
  rotationItems(): NSArray<any>;
}

declare const MSRotateEventHandler: {
  alloc(): MSRotateEventHandlerUninitialized;
  class(): MSRotateEventHandler;
  cursorForDegrees(degrees: NSInteger): NSCursor;
  cursorForCorner_ofCoordinateSpace(corner: BCCorner, coordinateSpace: any | null): NSCursor;
  accessInstanceVariablesDirectly(): boolean;
  restorableStateKeyPaths(): NSArray<any>;

}

