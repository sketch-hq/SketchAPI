interface TDLetterUninitialized<InitializedType = TDLetter> extends TDTerminalUninitialized<TDLetter> {}

interface TDLetter extends TDTerminal {
}

declare const TDLetter: {
  alloc(): TDLetterUninitialized;
  class(): TDLetter;
  letter(): any;
}

