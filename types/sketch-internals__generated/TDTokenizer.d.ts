interface TDTokenizerUninitialized<InitializedType = TDTokenizer> extends NSObjectUninitialized<TDTokenizer> {
  initWithString(s: NSString | string): InitializedType;
}

interface TDTokenizer extends NSObject {
  nextToken(): TDToken;
  setTokenizerState_from_to(state: TDTokenizerState, start: NSInteger, end: NSInteger): void;

  string(): NSString;
  setString(string: NSString | string): void;
  numberState(): TDNumberState;
  setNumberState(numberState: TDNumberState): void;
  quoteState(): TDQuoteState;
  setQuoteState(quoteState: TDQuoteState): void;
  commentState(): TDCommentState;
  setCommentState(commentState: TDCommentState): void;
  symbolState(): TDSymbolState;
  setSymbolState(symbolState: TDSymbolState): void;
  whitespaceState(): TDWhitespaceState;
  setWhitespaceState(whitespaceState: TDWhitespaceState): void;
  wordState(): TDWordState;
  setWordState(wordState: TDWordState): void;
}

declare const TDTokenizer: {
  alloc(): TDTokenizerUninitialized;
  class(): TDTokenizer;
  tokenizer(): any;
  tokenizerWithString(s: NSString | string): any;
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

