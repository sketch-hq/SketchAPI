interface TDSignificantWhitespaceStateUninitialized<InitializedType = TDSignificantWhitespaceState> extends TDWhitespaceStateUninitialized<TDSignificantWhitespaceState> {}
interface TDSignificantWhitespaceState extends TDWhitespaceState {
}
declare const TDSignificantWhitespaceState: {
  alloc(): TDSignificantWhitespaceStateUninitialized;
  class(): TDSignificantWhitespaceState;
}

