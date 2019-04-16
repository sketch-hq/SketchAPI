interface TDSymbolUninitialized<InitializedType = TDSymbol> extends TDTerminalUninitialized<TDSymbol> {}
interface TDSymbol extends TDTerminal {
}
declare const TDSymbol: {
  alloc(): TDSymbolUninitialized;
  class(): TDSymbol;  symbol(): any;
  symbolWithString(s: NSString | string): any;

}

