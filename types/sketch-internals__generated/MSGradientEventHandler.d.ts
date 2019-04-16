interface MSGradientEventHandlerUninitialized<InitializedType = MSGradientEventHandler> extends MSPointsEventHandlerUninitialized<MSGradientEventHandler> {}

interface MSGradientEventHandler extends MSPointsEventHandler, IMSGradientPointArrayDelegate {
  gradient(): MSGradient;
  selectPointCursor(): NSCursor;
  insertPointCursor(): NSCursor;
  canInsertPointAtMouse(mouse: NSPoint): boolean;
  addStopAtPosition(mouse: NSPoint): NSInteger;
  repairGradientIfNecessary(): void;
  gradientPointArray_didReplacePointAtIndex_withPoint(array: MSGradientPointArray, i: NSUInteger, aPoint: NSPoint): void;

  stylePart(): MSStyleBasicFill;
  setStylePart(stylePart: MSStyleBasicFill): void;
  gradientDelegate(): any;
  setGradientDelegate(gradientDelegate: any): void;
}

declare const MSGradientEventHandler: {
  alloc(): MSGradientEventHandlerUninitialized;
  class(): MSGradientEventHandler;
  gradientHandlerForStylePart_manager(part: MSStyleBasicFill, manager: MSEventHandlerManager): MSGradientEventHandler;
}

