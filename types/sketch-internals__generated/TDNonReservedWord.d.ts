interface TDNonReservedWordUninitialized<InitializedType = TDNonReservedWord> extends TDWordUninitialized<TDNonReservedWord> {}

interface TDNonReservedWord extends TDWord {
}

declare const TDNonReservedWord: {
  alloc(): TDNonReservedWordUninitialized;
  class(): TDNonReservedWord;
  word(): any;
}

