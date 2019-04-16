interface NSParagraphStyleUninitialized<InitializedType = NSParagraphStyle> extends NSObjectUninitialized<NSParagraphStyle> {}

interface NSParagraphStyle extends NSObject, INSCopying, INSMutableCopying, INSSecureCoding {
  addSVGAttributes(attributes: NSMutableArray<any> | any[]): void;
  copyWithZone(zone: NSZone | null): any;
  mutableCopyWithZone(zone: NSZone | null): any;

  lineSpacing(): CGFloat;
  paragraphSpacing(): CGFloat;
  alignment(): NSTextAlignment;
  headIndent(): CGFloat;
  tailIndent(): CGFloat;
  firstLineHeadIndent(): CGFloat;
  minimumLineHeight(): CGFloat;
  maximumLineHeight(): CGFloat;
  lineBreakMode(): NSLineBreakMode;
  baseWritingDirection(): NSWritingDirection;
  lineHeightMultiple(): CGFloat;
  paragraphSpacingBefore(): CGFloat;
  hyphenationFactor(): number;
  tabStops(): NSArray<any>;
  defaultTabInterval(): CGFloat;
  allowsDefaultTighteningForTruncation(): boolean;
  tighteningFactorForTruncation(): number;
  textBlocks(): NSArray<any>;
  textLists(): NSArray<any>;
  headerLevel(): NSInteger;
  fixedLineHeight_ms(): CGFloat;
}

declare const NSParagraphStyle: {
  alloc(): NSParagraphStyleUninitialized;
  class(): NSParagraphStyle;
  defaultWritingDirectionForLanguage(languageName: NSString | string | null): NSWritingDirection;
  paragraphStyleWithAlignment_ms(alignment: NSTextAlignment): NSParagraphStyle;
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
  defaultParagraphStyle(): NSParagraphStyle;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

