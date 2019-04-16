interface MSOverlayRendererUninitialized<InitializedType = MSOverlayRenderer> extends NSObjectUninitialized<MSOverlayRenderer> {}
interface MSOverlayRenderer extends NSObject {
  trackMouseWithLocation(location: CGPoint): void;
  updateCursorWithLocation_modifierFlags(location: CGPoint, modifierFlags: NSEventModifierFlags): boolean;
  drawRect_context(dirtyRect: NSRect, context: MSRenderingContext): void;
  setNeedsDisplayInRect(rect: NSRect): void;

  hidden(): boolean;
  setHidden(hidden: boolean): void;
  hostView(): any;
  setHostView(hostView: any): void;
}
declare const MSOverlayRenderer: {
  alloc(): MSOverlayRendererUninitialized;
  class(): MSOverlayRenderer;
}

