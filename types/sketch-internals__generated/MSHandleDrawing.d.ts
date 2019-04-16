interface MSHandleDrawingUninitialized<InitializedType = MSHandleDrawing> extends NSObjectUninitialized<MSHandleDrawing> {}

interface MSHandleDrawing extends NSObject {
}

declare const MSHandleDrawing: {
  alloc(): MSHandleDrawingUninitialized;
  class(): MSHandleDrawing;
  drawRectAtPoint_ofType(aPoint: NSPoint, type: MSDotRectType): void;
  drawBezier(bezier: NSBezierPath): void;
  drawAtPoint_ofType_state(aPoint: NSPoint, type: MSHandleSize, state: MSHandleState): void;
  drawGradientHandleAtPoint_color_selected(aPoint: NSPoint, aColor: NSColor | null, isSelected: boolean): void;
  drawShadowForHover_inBlock(isHovering: boolean, block: BCVoidBlock): void;
  drawWithTransformStruct_aroundPoint_usingBlock(tStruct: CHTransformStruct, point: NSPoint, block: Block): void;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
  resetZoomValue(): void;
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

