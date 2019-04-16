interface TDAlternationUninitialized<InitializedType = TDAlternation> extends TDCollectionParserUninitialized<TDAlternation> {}
interface TDAlternation extends TDCollectionParser {
}
declare const TDAlternation: {
  alloc(): TDAlternationUninitialized;
  class(): TDAlternation;  alternation(): any;

}

