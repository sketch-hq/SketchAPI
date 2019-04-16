interface MSVectorCanvasUninitialized<InitializedType = MSVectorCanvas> extends NSObjectUninitialized<MSVectorCanvas> {}

interface MSVectorCanvas extends NSObject {
  registerWithEventHandler(handler: MSShapeEventHandler): void;
  didChangeAllowSelectionOnly(): void;
  selectHandleAtIndexPath_extendSelection(handle: NSIndexPath, extendSelection: boolean): void;
  selectHandlesAtIndexPaths(indexPaths: NSArray<any> | any[]): void;
  deselectHandleAtIndexPath(handle: NSIndexPath): void;
  drawHairline(): void;
  drawWire(): void;
  drawSnaps(): void;
  drawHighlightedSegment(): void;
  drawInsertionPoint(): void;
  drawHandles(): void;
  changeToCurveMode(curveMode: MSCurveMode): void;
  delete(sender: any): IBAction;
  alignVectorPointsToKey(key: NSString | string): void;
  distributeVectorPointsToAxis(axis: BCAxis): void;
  adjustHandlesToValue_onAxis(value: CGFloat, axis: BCAxis): void;
  adjustHandle_toValue_onAxis(handle: NSIndexPath, value: CGFloat, axis: BCAxis): void;
  singleMouseDownAtPoint_modifierFlags(location: NSPoint, flags: NSEventModifierFlags): void;
  doubleMouseDownAtPoint_modifierFlags(location: NSPoint, flags: NSEventModifierFlags): void;
  mouseUpAtPoint(location: NSPoint): void;
  trackMouse(sender: MSMouseTracker): void;
  flagsChanged(event: NSEvent): void;
  updateCursor(): void;
  setNeedsUpdateCursor(): void;

  eventHandler(): MSShapeEventHandler;
  view(): MSContentDrawView;
  setView(view: MSContentDrawView): void;
  pathController(): MSPathController;
  setPathController(pathController: MSPathController): void;
  selectedLayers(): NSArray<any>;
  setSelectedLayers(selectedLayers: NSArray<any> | any[]): void;
  visibleLayers(): NSArray<any>;
  editingBehavior(): MSShapeEditingBehavior;
  setEditingBehavior(editingBehavior: MSShapeEditingBehavior): void;
  indexPathsForSelectedHandles(): NSArray<any>;
  indexPathForHighlightedComponent(): NSIndexPath;
  interactivelySelecting(): boolean;
  snaps(): MSAlignmentEngineResult;
  setSnaps(snaps: MSAlignmentEngineResult): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSVectorCanvas: {
  alloc(): MSVectorCanvasUninitialized;
  class(): MSVectorCanvas;
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
  accessInstanceVariablesDirectly(): boolean;

}

