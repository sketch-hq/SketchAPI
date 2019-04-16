interface TDReservedWordUninitialized<InitializedType = TDReservedWord> extends TDWordUninitialized<TDReservedWord> {}
interface TDReservedWord extends TDWord {
}
declare const TDReservedWord: {
  alloc(): TDReservedWordUninitialized;
  class(): TDReservedWord;  setReservedWords(inWords: NSArray<any> | any[]): void;

}

