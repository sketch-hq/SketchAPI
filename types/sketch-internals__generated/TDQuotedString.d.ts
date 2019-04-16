interface TDQuotedStringUninitialized<InitializedType = TDQuotedString> extends TDTerminalUninitialized<TDQuotedString> {}
interface TDQuotedString extends TDTerminal {
}
declare const TDQuotedString: {
  alloc(): TDQuotedStringUninitialized;
  class(): TDQuotedString;  quotedString(): any;

}

