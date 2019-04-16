interface TDCommentStateUninitialized<InitializedType = TDCommentState> extends TDTokenizerStateUninitialized<TDCommentState> {}

interface TDCommentState extends TDTokenizerState {
  addSingleLineStartSymbol(start: NSString | string): void;
  removeSingleLineStartSymbol(start: NSString | string): void;
  addMultiLineStartSymbol_endSymbol(start: NSString | string, end: NSString | string): void;
  removeMultiLineStartSymbol(start: NSString | string): void;

  reportsCommentTokens(): boolean;
  setReportsCommentTokens(reportsCommentTokens: boolean): void;
  balancesEOFTerminatedComments(): boolean;
  setBalancesEOFTerminatedComments(balancesEOFTerminatedComments: boolean): void;
}

declare const TDCommentState: {
  alloc(): TDCommentStateUninitialized;
  class(): TDCommentState;
}

