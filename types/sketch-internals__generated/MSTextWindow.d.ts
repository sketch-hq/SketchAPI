interface MSTextWindowUninitialized<InitializedType = MSTextWindow> extends NSWindowUninitialized<MSTextWindow> {
  initWithRect(rect: NSRect): InitializedType;
}
interface MSTextWindow extends NSWindow {
  moveToRect_contentDrawViewRect_behaviour(textViewRect: NSRect, contentDrawViewRect: NSRect, behaviour: BCTextBehaviourType): void;
  addTextView_toView(textView: NSTextView, childView: NSView): void;

  contentDrawView(): MSContentDrawView;
  setContentDrawView(contentDrawView: MSContentDrawView): void;
  textView(): NSTextView;
}
declare const MSTextWindow: {
  alloc(): MSTextWindowUninitialized;
  class(): MSTextWindow;
}

