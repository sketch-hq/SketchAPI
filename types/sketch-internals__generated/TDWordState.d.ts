interface TDWordStateUninitialized<InitializedType = TDWordState> extends TDTokenizerStateUninitialized<TDWordState> {}
interface TDWordState extends TDTokenizerState {
  setWordChars_from_to(yn: boolean, start: NSInteger, end: NSInteger): void;
  isWordChar(c: NSInteger): boolean;
}
declare const TDWordState: {
  alloc(): TDWordStateUninitialized;
  class(): TDWordState;
}

