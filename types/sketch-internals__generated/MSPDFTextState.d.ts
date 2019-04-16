interface MSPDFTextStateUninitialized<InitializedType = MSPDFTextState> extends NSObjectUninitialized<MSPDFTextState> {}

interface MSPDFTextState extends NSObject, INSCopying {
  shouldFill(): boolean;
  shouldStroke(): boolean;
  shouldClip(): boolean;
  setTransform_resettingLineTransform(transform: NSAffineTransform, resettingLineTransform: boolean): void;
  resetRenderingTransform(): void;
  appendText(text: NSString | string): void;
  attributes(): NSDictionary<any, any>;
  copyWithZone(zone: NSZone | null): any;

  characterSpacing(): CGFloat;
  setCharacterSpacing(characterSpacing: CGFloat): void;
  font(): NSFont;
  setFont(font: NSFont): void;
  fontName(): NSString;
  setFontName(fontName: NSString | string): void;
  fontInfo(): NSDictionary<any, any>;
  setFontInfo(fontInfo: NSDictionary<any, any> | {[key: string]: any}): void;
  leading(): CGFloat;
  setLeading(leading: CGFloat): void;
  lineTransform(): NSAffineTransform;
  setLineTransform(lineTransform: NSAffineTransform): void;
  mode(): NSUInteger;
  setMode(mode: NSUInteger): void;
  offset(): CGFloat;
  setOffset(offset: CGFloat): void;
  renderingTransform(): NSAffineTransform;
  setRenderingTransform(renderingTransform: NSAffineTransform): void;
  rise(): CGFloat;
  setRise(rise: CGFloat): void;
  scale(): CGFloat;
  setScale(scale: CGFloat): void;
  size(): CGFloat;
  setSize(size: CGFloat): void;
  state(): MSPDFState;
  setState(state: MSPDFState): void;
  text(): NSMutableAttributedString;
  setText(text: NSMutableAttributedString): void;
  transform(): NSAffineTransform;
  setTransform(transform: NSAffineTransform): void;
  wordSpacing(): CGFloat;
  setWordSpacing(wordSpacing: CGFloat): void;
}

declare const MSPDFTextState: {
  alloc(): MSPDFTextStateUninitialized;
  class(): MSPDFTextState;
  textStateWithState(state: MSPDFState): MSPDFTextState;
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

