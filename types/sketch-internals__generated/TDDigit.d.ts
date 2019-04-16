interface TDDigitUninitialized<InitializedType = TDDigit> extends TDTerminalUninitialized<TDDigit> {}
interface TDDigit extends TDTerminal {
}
declare const TDDigit: {
  alloc(): TDDigitUninitialized;
  class(): TDDigit;  digit(): any;

}

