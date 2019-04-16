interface NSTextBlockUninitialized<InitializedType = NSTextBlock> extends NSObjectUninitialized<NSTextBlock> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSTextBlock extends NSObject, INSCoding, INSCopying {
  setValue_type_forDimension(val: CGFloat, type: NSTextBlockValueType, dimension: NSTextBlockDimension): void;
  valueForDimension(dimension: NSTextBlockDimension): CGFloat;
  valueTypeForDimension(dimension: NSTextBlockDimension): NSTextBlockValueType;
  setContentWidth_type(val: CGFloat, type: NSTextBlockValueType): void;
  setWidth_type_forLayer_edge(val: CGFloat, type: NSTextBlockValueType, layer: NSTextBlockLayer, edge: NSRectEdge): void;
  setWidth_type_forLayer(val: CGFloat, type: NSTextBlockValueType, layer: NSTextBlockLayer): void;
  widthForLayer_edge(layer: NSTextBlockLayer, edge: NSRectEdge): CGFloat;
  widthValueTypeForLayer_edge(layer: NSTextBlockLayer, edge: NSRectEdge): NSTextBlockValueType;
  setBorderColor_forEdge(color: NSColor | null, edge: NSRectEdge): void;
  setBorderColor(color: NSColor | null): void;
  borderColorForEdge(edge: NSRectEdge): NSColor;
  rectForLayoutAtPoint_inRect_textContainer_characterRange(startingPoint: NSPoint, rect: NSRect, textContainer: NSTextContainer, charRange: NSRange): NSRect;
  boundsRectForContentRect_inRect_textContainer_characterRange(contentRect: NSRect, rect: NSRect, textContainer: NSTextContainer, charRange: NSRange): NSRect;
  drawBackgroundWithFrame_inView_characterRange_layoutManager(frameRect: NSRect, controlView: NSView, charRange: NSRange, layoutManager: NSLayoutManager): void;
  encodeWithCoder(aCoder: NSCoder): void;
  copyWithZone(zone: NSZone | null): any;

  contentWidth(): CGFloat;
  contentWidthValueType(): NSTextBlockValueType;
  verticalAlignment(): NSTextBlockVerticalAlignment;
  setVerticalAlignment(verticalAlignment: NSTextBlockVerticalAlignment): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
}

declare const NSTextBlock: {
  alloc(): NSTextBlockUninitialized;
  class(): NSTextBlock;
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

