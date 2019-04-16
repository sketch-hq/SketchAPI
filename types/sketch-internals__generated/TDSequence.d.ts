interface TDSequenceUninitialized<InitializedType = TDSequence> extends TDCollectionParserUninitialized<TDSequence> {}
interface TDSequence extends TDCollectionParser {
}
declare const TDSequence: {
  alloc(): TDSequenceUninitialized;
  class(): TDSequence;  sequence(): any;

}

