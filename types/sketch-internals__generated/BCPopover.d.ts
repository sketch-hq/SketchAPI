interface BCPopoverUninitialized<InitializedType = BCPopover> extends NSObjectUninitialized<BCPopover> {}
interface BCPopover extends NSObject, INSWindowDelegate, INSViewControllerPresentationAnimator {
  showRelativeToView_preferredEdge(view: NSView, edge: NSRectEdge): void;
  close(): void;
  move(): void;
  popoverWindowFrame(): NSRect;

  contentViewController(): NSViewController;
  setContentViewController(contentViewController: NSViewController): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  minimumHeight(): CGFloat;
  window(): BCPopoverWindow;
  setWindow(window: BCPopoverWindow): void;
  screenEdgeBehaviour(): BCPopoverScreenEdgeBehaviour;
  setScreenEdgeBehaviour(screenEdgeBehaviour: BCPopoverScreenEdgeBehaviour): void;
  layerDependency(): BCPopupLayerDependency;
  setLayerDependency(layerDependency: BCPopupLayerDependency): void;
  closesOnWindowDidResignKey(): boolean;
  setClosesOnWindowDidResignKey(closesOnWindowDidResignKey: boolean): void;
  attachedToView(): NSView;
  setAttachedToView(attachedToView: NSView): void;
  attachedToViewMargin(): CGFloat;
  setAttachedToViewMargin(attachedToViewMargin: CGFloat): void;
  preferredEdge(): NSRectEdge;
  setPreferredEdge(preferredEdge: NSRectEdge): void;
}
declare const BCPopover: {
  alloc(): BCPopoverUninitialized;
  class(): BCPopover;  closeAllPopovers(): void;

}

