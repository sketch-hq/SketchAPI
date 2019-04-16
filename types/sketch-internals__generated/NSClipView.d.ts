interface NSClipViewUninitialized<InitializedType = NSClipView> extends NSViewUninitialized<NSClipView> {}

interface NSClipView extends NSView {
  viewFrameChanged(notification: NSNotification): void;
  viewBoundsChanged(notification: NSNotification): void;
  autoscroll(event: NSEvent): boolean;
  scrollToPoint(newOrigin: NSPoint): void;
  constrainBoundsRect(proposedBounds: NSRect): NSRect;
  constrainScrollPoint(newOrigin: NSPoint): NSPoint;

  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  drawsBackground(): boolean;
  setDrawsBackground(drawsBackground: boolean): void;
  documentView(): NSView;
  setDocumentView(documentView: NSView): void;
  documentRect(): NSRect;
  documentCursor(): NSCursor;
  setDocumentCursor(documentCursor: NSCursor): void;
  documentVisibleRect(): NSRect;
  copiesOnScroll(): boolean;
  setCopiesOnScroll(copiesOnScroll: boolean): void;
  contentInsets(): NSEdgeInsets;
  setContentInsets(contentInsets: NSEdgeInsets): void;
  automaticallyAdjustsContentInsets(): boolean;
  setAutomaticallyAdjustsContentInsets(automaticallyAdjustsContentInsets: boolean): void;
}

declare const NSClipView: {
  alloc(): NSClipViewUninitialized;
  class(): NSClipView;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

