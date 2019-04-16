interface TDEmptyUninitialized<InitializedType = TDEmpty> extends TDParserUninitialized<TDEmpty> {}

interface TDEmpty extends TDParser {
}

declare const TDEmpty: {
  alloc(): TDEmptyUninitialized;
  class(): TDEmpty;
  empty(): any;
  parser(): any;
}

