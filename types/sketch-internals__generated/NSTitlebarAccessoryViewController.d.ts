interface NSTitlebarAccessoryViewControllerUninitialized<InitializedType = NSTitlebarAccessoryViewController> extends NSViewControllerUninitialized<NSTitlebarAccessoryViewController> {}

interface NSTitlebarAccessoryViewController extends NSViewController, INSAnimationDelegate, INSAnimatablePropertyContainer {
  animationShouldStart(animation: NSAnimation): boolean;
  animationDidStop(animation: NSAnimation): void;
  animationDidEnd(animation: NSAnimation): void;
  animation_valueForProgress(animation: NSAnimation, progress: NSAnimationProgress): number;
  animation_didReachProgressMark(animation: NSAnimation, progress: NSAnimationProgress): void;
  animator(): NSTitlebarAccessoryViewController;
  animationForKey(key: NSAnimatablePropertyKey): any;

  layoutAttribute(): NSLayoutAttribute;
  setLayoutAttribute(layoutAttribute: NSLayoutAttribute): void;
  fullScreenMinHeight(): CGFloat;
  setFullScreenMinHeight(fullScreenMinHeight: CGFloat): void;
  hidden(): boolean;
  setHidden(hidden: boolean): void;
  animations(): NSDictionary<any, any>;
  setAnimations(animations: NSDictionary<any, any> | {[key: string]: any}): void;
}

declare const NSTitlebarAccessoryViewController: {
  alloc(): NSTitlebarAccessoryViewControllerUninitialized;
  class(): NSTitlebarAccessoryViewController;
  defaultAnimationForKey(key: NSAnimatablePropertyKey): any;
}

