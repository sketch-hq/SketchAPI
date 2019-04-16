interface TDCollectionParserUninitialized<InitializedType = TDCollectionParser> extends TDParserUninitialized<TDCollectionParser> {}
interface TDCollectionParser extends TDParser {
  add(p: TDParser): void;

  subparsers(): NSMutableArray<any>;
}
declare const TDCollectionParser: {
  alloc(): TDCollectionParserUninitialized;
  class(): TDCollectionParser;
}

