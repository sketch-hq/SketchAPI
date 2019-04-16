interface TDMultiLineCommentStateUninitialized<InitializedType = TDMultiLineCommentState> extends TDTokenizerStateUninitialized<TDMultiLineCommentState> {}

interface TDMultiLineCommentState extends TDTokenizerState {
}

declare const TDMultiLineCommentState: {
  alloc(): TDMultiLineCommentStateUninitialized;
  class(): TDMultiLineCommentState;
}

