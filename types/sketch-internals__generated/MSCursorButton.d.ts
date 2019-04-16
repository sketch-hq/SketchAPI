interface MSCursorButtonUninitialized<InitializedType = MSCursorButton> extends NSButtonUninitialized<MSCursorButton> {}
interface MSCursorButton extends NSButton {

  cursor(): NSCursor;
  setCursor(cursor: NSCursor): void;
}
declare const MSCursorButton: {
  alloc(): MSCursorButtonUninitialized;
  class(): MSCursorButton;
}

