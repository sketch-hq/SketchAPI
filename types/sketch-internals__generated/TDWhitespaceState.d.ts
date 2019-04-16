interface TDWhitespaceStateUninitialized<InitializedType = TDWhitespaceState> extends TDTokenizerStateUninitialized<TDWhitespaceState> {}

interface TDWhitespaceState extends TDTokenizerState {
  isWhitespaceChar(cin: NSInteger): boolean;
  setWhitespaceChars_from_to(yn: boolean, start: NSInteger, end: NSInteger): void;

  reportsWhitespaceTokens(): boolean;
  setReportsWhitespaceTokens(reportsWhitespaceTokens: boolean): void;
}

declare const TDWhitespaceState: {
  alloc(): TDWhitespaceStateUninitialized;
  class(): TDWhitespaceState;
  accessInstanceVariablesDirectly(): boolean;

}

