interface NSCursorUninitialized<InitializedType = NSCursor> extends NSObjectUninitialized<NSCursor> {
  initWithImage_hotSpot(newImage: NSImage, point: NSPoint): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithImage_foregroundColorHint_backgroundColorHint_hotSpot(newImage: NSImage, fg: NSColor | null, bg: NSColor | null, hotSpot: NSPoint): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSCursor extends NSObject, INSCoding {
  pop(): void;
  push(): void;
  set(): void;
  setOnMouseExited(flag: boolean): void;
  setOnMouseEntered(flag: boolean): void;
  mouseEntered(event: NSEvent): void;
  mouseExited(event: NSEvent): void;
  encodeWithCoder(aCoder: NSCoder): void;

  image(): NSImage;
  hotSpot(): NSPoint;
  setOnMouseExited(): boolean;
  setOnMouseEntered(): boolean;
}

declare const NSCursor: {
  alloc(): NSCursorUninitialized;
  class(): NSCursor;
  hide(): void;
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
  accessInstanceVariablesDirectly(): boolean;

}

