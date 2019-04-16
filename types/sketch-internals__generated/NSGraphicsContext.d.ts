interface NSGraphicsContextUninitialized<InitializedType = NSGraphicsContext> extends NSObjectUninitialized<NSGraphicsContext> {}

interface NSGraphicsContext extends NSObject {
  saveGraphicsState(): void;
  restoreGraphicsState(): void;
  flushGraphics(): void;
  focusStack(): any;
  setFocusStack(stack: any): void;

  attributes(): NSDictionary<any, any>;
  drawingToScreen(): boolean;
  CGContext(): CGContextRef;
  flipped(): boolean;
  shouldAntialias(): boolean;
  setShouldAntialias(shouldAntialias: boolean): void;
  imageInterpolation(): NSImageInterpolation;
  setImageInterpolation(imageInterpolation: NSImageInterpolation): void;
  patternPhase(): NSPoint;
  setPatternPhase(patternPhase: NSPoint): void;
  compositingOperation(): NSCompositingOperation;
  setCompositingOperation(compositingOperation: NSCompositingOperation): void;
  colorRenderingIntent(): NSColorRenderingIntent;
  setColorRenderingIntent(colorRenderingIntent: NSColorRenderingIntent): void;
  CIContext(): CIContext;
  graphicsPort(): void;
}

declare const NSGraphicsContext: {
  alloc(): NSGraphicsContextUninitialized;
  class(): NSGraphicsContext;
  graphicsContextWithAttributes(attributes: NSDictionary<any, any> | {[key: string]: any}): NSGraphicsContext;
  graphicsContextWithWindow(window: NSWindow): NSGraphicsContext;
  graphicsContextWithBitmapImageRep(bitmapRep: NSBitmapImageRep): NSGraphicsContext;
  graphicsContextWithCGContext_flipped(graphicsPort: CGContextRef, initialFlippedState: boolean): NSGraphicsContext;
  currentContextDrawingToScreen(): boolean;
  setGraphicsState(gState: NSInteger): void;
  graphicsContextWithGraphicsPort_flipped(graphicsPort: void, initialFlippedState: boolean): NSGraphicsContext;
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
  currentContext(): NSGraphicsContext;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCurrentContext(currentContext: NSGraphicsContext): void;
  accessInstanceVariablesDirectly(): boolean;

}

