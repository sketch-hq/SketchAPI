interface MSInspectorNextResponderFixerUninitialized<InitializedType = MSInspectorNextResponderFixer> extends NSObjectUninitialized<MSInspectorNextResponderFixer> {}
interface MSInspectorNextResponderFixer extends NSObject {
}
declare const MSInspectorNextResponderFixer: {
  alloc(): MSInspectorNextResponderFixerUninitialized;
  class(): MSInspectorNextResponderFixer;  findNextKeyViewFor_inView(keyView: NSView, view: NSView): NSView;
  firstKeyViewForInView(view: NSView): NSView;

}

