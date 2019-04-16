interface TDNumberStateUninitialized<InitializedType = TDNumberState> extends TDTokenizerStateUninitialized<TDNumberState> {}
interface TDNumberState extends TDTokenizerState {

  allowsTrailingDot(): boolean;
  setAllowsTrailingDot(allowsTrailingDot: boolean): void;
}
declare const TDNumberState: {
  alloc(): TDNumberStateUninitialized;
  class(): TDNumberState;
}

