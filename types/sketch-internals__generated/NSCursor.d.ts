interface NSCursorUninitialized<InitializedType = NSCursor> extends NSObjectUninitialized<NSCursor> {
  initWithImage_hotSpot(newImage: NSImage, point: NSPoint): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithImage_foregroundColorHint_backgroundColorHint_hotSpot(newImage: NSImage, fg: NSColor | null, bg: NSColor | null, hotSpot: NSPoint): InitializedType;
}
interface NSCursor extends NSObject, INSCoding {
  pop(): void;
  push(): void;
  set(): void;
  setOnMouseExited(flag: boolean): void;
  setOnMouseEntered(flag: boolean): void;
  mouseEntered(event: NSEvent): void;
  mouseExited(event: NSEvent): void;

  image(): NSImage;
  hotSpot(): NSPoint;
  setOnMouseExited(): boolean;
  setOnMouseEntered(): boolean;
}
declare const NSCursor: {
  alloc(): NSCursorUninitialized;
  class(): NSCursor;  hide(): void;
  unhide(): void;
  setHiddenUntilMouseMoves(flag: boolean): void;
  cursorWithImageNamed(name: NSString | string): NSCursor;
  cursorWithImageNamed_hotSpot(name: NSString | string, spot: NSPoint): NSCursor;
  penCursor(): NSCursor;
  penAddCursor(): NSCursor;
  penCloseCursor(): NSCursor;
  pencilCursor(): NSCursor;
  resizeHorCursor(): NSCursor;
  resizeHorCursorShort(): NSCursor;
  resizeHorCursorLong(): NSCursor;
  resizeVerCursor(): NSCursor;
  resizeTopLeftToBottomRightCursor(): NSCursor;
  resizeBottomLeftToTopRightCursor(): NSCursor;
  rotateBottomRightCursor(): NSCursor;
  rotateBottomLeftCursor(): NSCursor;
  rotateTopLeftCursor(): NSCursor;
  rotateTopRightCursor(): NSCursor;
  rotateLeftCursor(): NSCursor;
  rotateRightCursor(): NSCursor;
  rotateTopCursor(): NSCursor;
  rotateBottomCursor(): NSCursor;

  currentCursor(): NSCursor;
  currentSystemCursor(): NSCursor;
  arrowCursor(): NSCursor;
  IBeamCursor(): NSCursor;
  pointingHandCursor(): NSCursor;
  closedHandCursor(): NSCursor;
  openHandCursor(): NSCursor;
  resizeLeftCursor(): NSCursor;
  resizeRightCursor(): NSCursor;
  resizeLeftRightCursor(): NSCursor;
  resizeUpCursor(): NSCursor;
  resizeDownCursor(): NSCursor;
  resizeUpDownCursor(): NSCursor;
  crosshairCursor(): NSCursor;
  disappearingItemCursor(): NSCursor;
  operationNotAllowedCursor(): NSCursor;
  dragLinkCursor(): NSCursor;
  dragCopyCursor(): NSCursor;
  contextualMenuCursor(): NSCursor;
  IBeamCursorForVerticalLayout(): NSCursor;

}

