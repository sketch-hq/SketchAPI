interface TDUppercaseWordUninitialized<InitializedType = TDUppercaseWord> extends TDWordUninitialized<TDUppercaseWord> {}

interface TDUppercaseWord extends TDWord {
}

declare const TDUppercaseWord: {
  alloc(): TDUppercaseWordUninitialized;
  class(): TDUppercaseWord;
  word(): any;
}

