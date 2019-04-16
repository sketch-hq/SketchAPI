interface MSOpacityKeyboardShortcutRecognizerUninitialized<InitializedType = MSOpacityKeyboardShortcutRecognizer> extends NSObjectUninitialized<MSOpacityKeyboardShortcutRecognizer> {
  initWithTarget_action(target: any | null, action: string | null): InitializedType;
}
interface MSOpacityKeyboardShortcutRecognizer extends NSObject {
  keyDown(event: NSEvent): void;

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  concatenationDuration(): NSTimeInterval;
  setConcatenationDuration(concatenationDuration: NSTimeInterval): void;
  opacity(): CGFloat;
}
declare const MSOpacityKeyboardShortcutRecognizer: {
  alloc(): MSOpacityKeyboardShortcutRecognizerUninitialized;
  class(): MSOpacityKeyboardShortcutRecognizer;
}

