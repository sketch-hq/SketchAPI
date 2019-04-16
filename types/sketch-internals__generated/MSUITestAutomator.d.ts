interface MSUITestAutomatorUninitialized<InitializedType = MSUITestAutomator> extends NSObjectUninitialized<MSUITestAutomator> {}
interface MSUITestAutomator extends NSObject {
  queuePlaybackEvent(event: dispatch_block_t): void;
  playback(): void;
  pausePlaybackFor(pause: NSTimeInterval): void;
  singleClickAtPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  doubleClickAtPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  startDragAtPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  dragToPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  endDragAtPoint_inView_flags(click: NSPoint, view: NSView, flags: NSEventModifierFlags): void;
  sendKeyPressEvent_modifiers(characters: NSString | string, flags: NSEventModifierFlags): void;
  sendDeleteKeyPressed(flags: NSEventModifierFlags): void;
  sendRightArrowKeyModifiers(flags: NSEventModifierFlags): void;
  sendLeftArrowKeyModifiers(flags: NSEventModifierFlags): void;
  sendUpArrowKeyModifiers(flags: NSEventModifierFlags): void;
  sendDownArrowKeyModifiers(flags: NSEventModifierFlags): void;
}
declare const MSUITestAutomator: {
  alloc(): MSUITestAutomatorUninitialized;
  class(): MSUITestAutomator;
}

