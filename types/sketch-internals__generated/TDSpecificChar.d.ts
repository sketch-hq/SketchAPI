interface TDSpecificCharUninitialized<InitializedType = TDSpecificChar> extends TDTerminalUninitialized<TDSpecificChar> {
  initWithSpecificChar(c: NSInteger): InitializedType;
}

interface TDSpecificChar extends TDTerminal {
}

declare const TDSpecificChar: {
  alloc(): TDSpecificCharUninitialized;
  class(): TDSpecificChar;
  specificCharWithChar(c: NSInteger): any;
}

