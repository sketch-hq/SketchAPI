interface TDSingleLineCommentStateUninitialized<InitializedType = TDSingleLineCommentState> extends TDTokenizerStateUninitialized<TDSingleLineCommentState> {}

interface TDSingleLineCommentState extends TDTokenizerState {
}

declare const TDSingleLineCommentState: {
  alloc(): TDSingleLineCommentStateUninitialized;
  class(): TDSingleLineCommentState;
}

