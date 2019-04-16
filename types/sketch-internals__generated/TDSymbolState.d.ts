interface TDSymbolStateUninitialized<InitializedType = TDSymbolState> extends TDTokenizerStateUninitialized<TDSymbolState> {}

interface TDSymbolState extends TDTokenizerState {
  add(s: NSString | string): void;
  remove(s: NSString | string): void;
}

declare const TDSymbolState: {
  alloc(): TDSymbolStateUninitialized;
  class(): TDSymbolState;
}

