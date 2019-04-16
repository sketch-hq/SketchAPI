interface TDCommentUninitialized<InitializedType = TDComment> extends TDTerminalUninitialized<TDComment> {}
interface TDComment extends TDTerminal {
}
declare const TDComment: {
  alloc(): TDCommentUninitialized;
  class(): TDComment;  comment(): any;

}

