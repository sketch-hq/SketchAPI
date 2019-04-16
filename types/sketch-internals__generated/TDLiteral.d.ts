interface TDLiteralUninitialized<InitializedType = TDLiteral> extends TDTerminalUninitialized<TDLiteral> {}
interface TDLiteral extends TDTerminal {
}
declare const TDLiteral: {
  alloc(): TDLiteralUninitialized;
  class(): TDLiteral;  literalWithString(s: NSString | string): any;

}

