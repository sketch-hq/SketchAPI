interface NSTitlebarAccessoryViewControllerUninitialized<InitializedType = NSTitlebarAccessoryViewController> extends NSViewControllerUninitialized<NSTitlebarAccessoryViewController> {}
interface NSTitlebarAccessoryViewController extends NSViewController, INSAnimationDelegate, INSAnimatablePropertyContainer {

  layoutAttribute(): NSLayoutAttribute;
  setLayoutAttribute(layoutAttribute: NSLayoutAttribute): void;
  fullScreenMinHeight(): CGFloat;
  setFullScreenMinHeight(fullScreenMinHeight: CGFloat): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
}
declare const NSTitlebarAccessoryViewController: {
  alloc(): NSTitlebarAccessoryViewControllerUninitialized;
  class(): NSTitlebarAccessoryViewController;
}

