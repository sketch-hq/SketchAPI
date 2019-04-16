interface NSTextContainerUninitialized<InitializedType = NSTextContainer> extends NSObjectUninitialized<NSTextContainer> {
  initWithSize(size: NSSize): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithContainerSize(aContainerSize: NSSize): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSTextContainer extends NSObject, INSCoding, INSTextLayoutOrientationProvider {
  replaceLayoutManager(newLayoutManager: NSLayoutManager): void;
  lineFragmentRectForProposedRect_atIndex_writingDirection_remainingRect(proposedRect: NSRect, characterIndex: NSUInteger, baseWritingDirection: NSWritingDirection, remainingRect: NSRect | null): NSRect;
  lineFragmentRectForProposedRect_sweepDirection_movementDirection_remainingRect(proposedRect: NSRect, sweepDirection: NSLineSweepDirection, movementDirection: NSLineMovementDirection, remainingRect: NSRectPointer | null): NSRect;
  containsPoint(point: NSPoint): boolean;
  encodeWithCoder(aCoder: NSCoder): void;

  layoutManager(): NSLayoutManager;
  setLayoutManager(layoutManager: NSLayoutManager): void;
  size(): NSSize;
  setSize(size: NSSize): void;
  exclusionPaths(): NSArray<any>;
  setExclusionPaths(exclusionPaths: NSArray<any> | any[]): void;
  lineBreakMode(): NSLineBreakMode;
  setLineBreakMode(lineBreakMode: NSLineBreakMode): void;
  lineFragmentPadding(): CGFloat;
  setLineFragmentPadding(lineFragmentPadding: CGFloat): void;
  maximumNumberOfLines(): NSUInteger;
  setMaximumNumberOfLines(maximumNumberOfLines: NSUInteger): void;
  simpleRectangularTextContainer(): boolean;
  widthTracksTextView(): boolean;
  setWidthTracksTextView(widthTracksTextView: boolean): void;
  heightTracksTextView(): boolean;
  setHeightTracksTextView(heightTracksTextView: boolean): void;
  textView(): NSTextView;
  setTextView(textView: NSTextView): void;
  containerSize(): NSSize;
  setContainerSize(containerSize: NSSize): void;
}

declare const NSTextContainer: {
  alloc(): NSTextContainerUninitialized;
  class(): NSTextContainer;
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

