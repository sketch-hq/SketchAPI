interface TDNumUninitialized<InitializedType = TDNum> extends TDTerminalUninitialized<TDNum> {}

interface TDNum extends TDTerminal {
}

declare const TDNum: {
  alloc(): TDNumUninitialized;
  class(): TDNum;
  num(): any;
}

