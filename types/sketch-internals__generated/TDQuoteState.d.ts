interface TDQuoteStateUninitialized<InitializedType = TDQuoteState> extends TDTokenizerStateUninitialized<TDQuoteState> {}

interface TDQuoteState extends TDTokenizerState {

  balancesEOFTerminatedQuotes(): boolean;
  setBalancesEOFTerminatedQuotes(balancesEOFTerminatedQuotes: boolean): void;
}

declare const TDQuoteState: {
  alloc(): TDQuoteStateUninitialized;
  class(): TDQuoteState;
}

