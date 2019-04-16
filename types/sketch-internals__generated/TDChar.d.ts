interface TDCharUninitialized<InitializedType = TDChar> extends TDTerminalUninitialized<TDChar> {}
interface TDChar extends TDTerminal {
}
declare const TDChar: {
  alloc(): TDCharUninitialized;
  class(): TDChar;  char(): any;

}

