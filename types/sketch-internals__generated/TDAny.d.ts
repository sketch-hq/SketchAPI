interface TDAnyUninitialized<InitializedType = TDAny> extends TDTerminalUninitialized<TDAny> {}

interface TDAny extends TDTerminal {
}

declare const TDAny: {
  alloc(): TDAnyUninitialized;
  class(): TDAny;
  any(): any;
}

