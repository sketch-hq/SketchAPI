interface INSSpellServerDelegate {
  spellServer_findMisspelledWordInString_language_wordCount_countOnly(sender: NSSpellServer, stringToCheck: NSString | string, language: NSString | string, wordCount: NSInteger, countOnly: boolean): NSRange;
  spellServer_suggestGuessesForWord_inLanguage(sender: NSSpellServer, word: NSString | string, language: NSString | string): NSArray<any>;
  spellServer_didLearnWord_inLanguage(sender: NSSpellServer, word: NSString | string, language: NSString | string): void;
  spellServer_didForgetWord_inLanguage(sender: NSSpellServer, word: NSString | string, language: NSString | string): void;
  spellServer_suggestCompletionsForPartialWordRange_inString_language(sender: NSSpellServer, range: NSRange, string: NSString | string, language: NSString | string): NSArray<any>;
  spellServer_checkGrammarInString_language_details(sender: NSSpellServer, stringToCheck: NSString | string, language: NSString | string | null, details: NSArray<any> | any[]): NSRange;
  spellServer_checkString_offset_types_options_orthography_wordCount(sender: NSSpellServer, stringToCheck: NSString | string, offset: NSUInteger, checkingTypes: NSTextCheckingTypes, options: NSDictionary<any, any> | {[key: string]: any} | null, orthography: NSOrthography | null, wordCount: NSInteger): NSArray<any>;
  spellServer_recordResponse_toCorrection_forWord_language(sender: NSSpellServer, response: NSUInteger, correction: NSString | string, word: NSString | string, language: NSString | string): void;
}

