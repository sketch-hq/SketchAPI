interface NSLinguisticTaggerUninitialized<InitializedType = NSLinguisticTagger> extends NSObjectUninitialized<NSLinguisticTagger> {
  initWithTagSchemes_options(tagSchemes: NSArray<any> | any[], opts: NSUInteger): InitializedType;
}

interface NSLinguisticTagger extends NSObject {
  setOrthography_range(orthography: NSOrthography | null, range: NSRange): void;
  orthographyAtIndex_effectiveRange(charIndex: NSUInteger, effectiveRange: NSRangePointer | null): NSOrthography;
  stringEditedInRange_changeInLength(newRange: NSRange, delta: NSInteger): void;
  tokenRangeAtIndex_unit(charIndex: NSUInteger, unit: NSLinguisticTaggerUnit): NSRange;
  sentenceRangeForRange(range: NSRange): NSRange;
  enumerateTagsInRange_unit_scheme_options_usingBlock(range: NSRange, unit: NSLinguisticTaggerUnit, scheme: NSLinguisticTagScheme, options: NSLinguisticTaggerOptions, block: Block): void;
  tagAtIndex_unit_scheme_tokenRange(charIndex: NSUInteger, unit: NSLinguisticTaggerUnit, scheme: NSLinguisticTagScheme, tokenRange: NSRangePointer | null): NSLinguisticTag;
  tagsInRange_unit_scheme_options_tokenRanges(range: NSRange, unit: NSLinguisticTaggerUnit, scheme: NSLinguisticTagScheme, options: NSLinguisticTaggerOptions, tokenRanges: MOPointer<NSArray<any>>): NSArray<any>;
  enumerateTagsInRange_scheme_options_usingBlock(range: NSRange, tagScheme: NSLinguisticTagScheme, opts: NSLinguisticTaggerOptions, block: Block): void;
  tagAtIndex_scheme_tokenRange_sentenceRange(charIndex: NSUInteger, scheme: NSLinguisticTagScheme, tokenRange: NSRangePointer | null, sentenceRange: NSRangePointer | null): NSLinguisticTag;
  tagsInRange_scheme_options_tokenRanges(range: NSRange, tagScheme: NSString | string, opts: NSLinguisticTaggerOptions, tokenRanges: MOPointer<NSArray<any>>): NSArray<any>;
  possibleTagsAtIndex_scheme_tokenRange_sentenceRange_scores(charIndex: NSUInteger, tagScheme: NSString | string, tokenRange: NSRangePointer | null, sentenceRange: NSRangePointer | null, scores: MOPointer<NSArray<any>>): NSArray<any>;

  tagSchemes(): NSArray<any>;
  string(): NSString;
  setString(string: NSString | string): void;
  dominantLanguage(): NSString;
}

declare const NSLinguisticTagger: {
  alloc(): NSLinguisticTaggerUninitialized;
  class(): NSLinguisticTagger;
  availableTagSchemesForUnit_language(unit: NSLinguisticTaggerUnit, language: NSString | string): NSArray<any>;
  availableTagSchemesForLanguage(language: NSString | string): NSArray<any>;
  dominantLanguageForString(string: NSString | string): NSString;
  tagForString_atIndex_unit_scheme_orthography_tokenRange(string: NSString | string, charIndex: NSUInteger, unit: NSLinguisticTaggerUnit, scheme: NSLinguisticTagScheme, orthography: NSOrthography | null, tokenRange: NSRangePointer | null): NSLinguisticTag;
  tagsForString_range_unit_scheme_options_orthography_tokenRanges(string: NSString | string, range: NSRange, unit: NSLinguisticTaggerUnit, scheme: NSLinguisticTagScheme, options: NSLinguisticTaggerOptions, orthography: NSOrthography | null, tokenRanges: MOPointer<NSArray<any>>): NSArray<any>;
  enumerateTagsForString_range_unit_scheme_options_orthography_usingBlock(string: NSString | string, range: NSRange, unit: NSLinguisticTaggerUnit, scheme: NSLinguisticTagScheme, options: NSLinguisticTaggerOptions, orthography: NSOrthography | null, block: Block): void;
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

