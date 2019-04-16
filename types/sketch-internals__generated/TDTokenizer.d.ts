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
  class(): TDTokenizer;  tokenizer(): any;
  tokenizerWithString(s: NSString | string): any;

}

