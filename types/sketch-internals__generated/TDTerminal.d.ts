interface TDTerminalUninitialized<InitializedType = TDTerminal> extends TDParserUninitialized<TDTerminal> {
  initWithString(s: NSString | string | null): InitializedType;
}

interface TDTerminal extends TDParser {
  discard(): TDTerminal;

  string(): NSString;
}

declare const TDTerminal: {
  alloc(): TDTerminalUninitialized;
  class(): TDTerminal;
  parser(): any;
  accessInstanceVariablesDirectly(): boolean;

}

