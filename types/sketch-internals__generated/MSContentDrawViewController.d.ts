interface MSContentDrawViewControllerUninitialized<InitializedType = MSContentDrawViewController> extends NSViewControllerUninitialized<MSContentDrawViewController> {}

interface MSContentDrawViewController extends NSViewController, IMSContentDrawViewDelegate {
  prepareForDealloc(): void;

  contentDrawView(): MSContentDrawView;
  setContentDrawView(contentDrawView: MSContentDrawView): void;
  contentDrawViewParent(): MSContentDrawViewParent;
  setContentDrawViewParent(contentDrawViewParent: MSContentDrawViewParent): void;
  horizontalRuler(): MSRulerView;
  setHorizontalRuler(horizontalRuler: MSRulerView): void;
  verticalRuler(): MSRulerView;
  setVerticalRuler(verticalRuler: MSRulerView): void;
  rulerCornerView(): NSView;
  setRulerCornerView(rulerCornerView: NSView): void;
  rulerWidthConstraint(): NSLayoutConstraint;
  setRulerWidthConstraint(rulerWidthConstraint: NSLayoutConstraint): void;
  rulerHeightConstraint(): NSLayoutConstraint;
  setRulerHeightConstraint(rulerHeightConstraint: NSLayoutConstraint): void;
  flashController(): MSFlashController;
  document(): MSDocument;
  setDocument(document: MSDocument): void;
  scrollOrigin(): NSPoint;
  setScrollOrigin(scrollOrigin: NSPoint): void;
  zoomValue(): CGFloat;
  setZoomValue(zoomValue: CGFloat): void;
}

declare const MSContentDrawViewController: {
  alloc(): MSContentDrawViewControllerUninitialized;
  class(): MSContentDrawViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

