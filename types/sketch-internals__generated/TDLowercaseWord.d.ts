interface TDLowercaseWordUninitialized<InitializedType = TDLowercaseWord> extends TDWordUninitialized<TDLowercaseWord> {}
interface TDLowercaseWord extends TDWord {
}
declare const TDLowercaseWord: {
  alloc(): TDLowercaseWordUninitialized;
  class(): TDLowercaseWord;
}

