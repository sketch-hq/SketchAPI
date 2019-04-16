interface TDTokenArraySourceUninitialized<InitializedType = TDTokenArraySource> extends NSObjectUninitialized<TDTokenArraySource> {
  initWithTokenizer_delimiter(t: TDTokenizer, s: NSString | string): InitializedType;
}
interface TDTokenArraySource extends NSObject {
  hasMore(): boolean;
  nextTokenArray(): NSArray<any>;
}
declare const TDTokenArraySource: {
  alloc(): TDTokenArraySourceUninitialized;
  class(): TDTokenArraySource;
}

