interface TDWordUninitialized<InitializedType = TDWord> extends TDTerminalUninitialized<TDWord> {}
interface TDWord extends TDTerminal {
}
declare const TDWord: {
  alloc(): TDWordUninitialized;
  class(): TDWord;  word(): any;

}

