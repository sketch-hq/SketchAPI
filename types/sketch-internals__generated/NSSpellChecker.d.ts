interface NSSpellCheckerUninitialized<InitializedType = NSSpellChecker> extends NSObjectUninitialized<NSSpellChecker> {}

interface NSSpellChecker extends NSObject {
  checkSpellingOfString_startingAt_language_wrap_inSpellDocumentWithTag_wordCount(stringToCheck: NSString | string, startingOffset: NSInteger, language: NSString | string | null, wrapFlag: boolean, tag: NSInteger, wordCount: NSInteger | null): NSRange;
  checkSpellingOfString_startingAt(stringToCheck: NSString | string, startingOffset: NSInteger): NSRange;
  countWordsInString_language(stringToCount: NSString | string, language: NSString | string | null): NSInteger;
  checkGrammarOfString_startingAt_language_wrap_inSpellDocumentWithTag_details(stringToCheck: NSString | string, startingOffset: NSInteger, language: NSString | string | null, wrapFlag: boolean, tag: NSInteger, details: MOPointer<NSArray<any>>): NSRange;
  checkString_range_types_options_inSpellDocumentWithTag_orthography_wordCount(stringToCheck: NSString | string, range: NSRange, checkingTypes: NSTextCheckingTypes, options: NSDictionary<any, any> | {[key: string]: any} | null, tag: NSInteger, orthography: MOPointer<NSOrthography>, wordCount: NSInteger | null): NSArray<any>;
  requestCheckingOfString_range_types_options_inSpellDocumentWithTag_completionHandler(stringToCheck: NSString | string, range: NSRange, checkingTypes: NSTextCheckingTypes, options: NSDictionary<any, any> | {[key: string]: any} | null, tag: NSInteger, completionHandler: Block): NSInteger;
  requestCandidatesForSelectedRange_inString_types_options_inSpellDocumentWithTag_completionHandler(selectedRange: NSRange, stringToCheck: NSString | string, checkingTypes: NSTextCheckingTypes, options: NSDictionary<any, any> | {[key: string]: any} | null, tag: NSInteger, completionHandler: Block): NSInteger;
  menuForResult_string_options_atLocation_inView(result: NSTextCheckingResult, checkedString: NSString | string, options: NSDictionary<any, any> | {[key: string]: any} | null, location: NSPoint, view: NSView): NSMenu;
  userQuotesArrayForLanguage(language: NSString | string): NSArray<any>;
  updateSpellingPanelWithMisspelledWord(word: NSString | string): void;
  updateSpellingPanelWithGrammarString_detail(string: NSString | string, detail: NSDictionary<any, any> | {[key: string]: any}): void;
  updatePanels(): void;
  ignoreWord_inSpellDocumentWithTag(wordToIgnore: NSString | string, tag: NSInteger): void;
  ignoredWordsInSpellDocumentWithTag(tag: NSInteger): NSArray<any>;
  setIgnoredWords_inSpellDocumentWithTag(words: NSArray<any> | any[], tag: NSInteger): void;
  guessesForWordRange_inString_language_inSpellDocumentWithTag(range: NSRange, string: NSString | string, language: NSString | string | null, tag: NSInteger): NSArray<any>;
  correctionForWordRange_inString_language_inSpellDocumentWithTag(range: NSRange, string: NSString | string, language: NSString | string, tag: NSInteger): NSString;
  completionsForPartialWordRange_inString_language_inSpellDocumentWithTag(range: NSRange, string: NSString | string, language: NSString | string | null, tag: NSInteger): NSArray<any>;
  languageForWordRange_inString_orthography(range: NSRange, string: NSString | string, orthography: NSOrthography | null): NSString;
  closeSpellDocumentWithTag(tag: NSInteger): void;
  recordResponse_toCorrection_forWord_language_inSpellDocumentWithTag(response: NSCorrectionResponse, correction: NSString | string, word: NSString | string, language: NSString | string | null, tag: NSInteger): void;
  showCorrectionIndicatorOfType_primaryString_alternativeStrings_forStringInRect_view_completionHandler(type: NSCorrectionIndicatorType, primaryString: NSString | string, alternativeStrings: NSArray<any> | any[], rectOfTypedString: NSRect, view: NSView, completionBlock: Block): void;
  dismissCorrectionIndicatorForView(view: NSView): void;
  preventsAutocorrectionBeforeString_language(string: NSString | string, language: NSString | string | null): boolean;
  deletesAutospaceBetweenString_andString_language(precedingString: NSString | string, followingString: NSString | string, language: NSString | string | null): boolean;
  setWordFieldStringValue(string: NSString | string): void;
  learnWord(word: NSString | string): void;
  hasLearnedWord(word: NSString | string): boolean;
  unlearnWord(word: NSString | string): void;
  language(): NSString;
  setLanguage(language: NSString | string): boolean;
  guessesForWord(word: NSString | string): NSArray<any>;
  forgetWord(word: NSString | string): void;

  userReplacementsDictionary(): NSDictionary<any, any>;
  spellingPanel(): NSPanel;
  accessoryView(): NSView;
  setAccessoryView(accessoryView: NSView): void;
  substitutionsPanel(): NSPanel;
  substitutionsPanelAccessoryViewController(): NSViewController;
  setSubstitutionsPanelAccessoryViewController(substitutionsPanelAccessoryViewController: NSViewController): void;
  availableLanguages(): NSArray<any>;
  userPreferredLanguages(): NSArray<any>;
  automaticallyIdentifiesLanguages(): boolean;
  setAutomaticallyIdentifiesLanguages(automaticallyIdentifiesLanguages: boolean): void;
}

declare const NSSpellChecker: {
  alloc(): NSSpellCheckerUninitialized;
  class(): NSSpellChecker;
  uniqueSpellDocumentTag(): NSInteger;
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
  sharedSpellChecker(): NSSpellChecker;
  sharedSpellCheckerExists(): boolean;
  automaticTextReplacementEnabled(): boolean;
  automaticSpellingCorrectionEnabled(): boolean;
  automaticQuoteSubstitutionEnabled(): boolean;
  automaticDashSubstitutionEnabled(): boolean;
  automaticCapitalizationEnabled(): boolean;
  automaticPeriodSubstitutionEnabled(): boolean;
  automaticTextCompletionEnabled(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

