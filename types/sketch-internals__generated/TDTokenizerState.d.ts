interface TDTokenizerStateUninitialized<InitializedType = TDTokenizerState> extends NSObjectUninitialized<TDTokenizerState> {}
interface TDTokenizerState extends NSObject {
  nextTokenFromReader_startingWith_tokenizer(r: TDReader, cin: NSInteger, t: TDTokenizer): TDToken;
}
declare const TDTokenizerState: {
  alloc(): TDTokenizerStateUninitialized;
  class(): TDTokenizerState;
}

