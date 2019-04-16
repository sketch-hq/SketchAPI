interface NSAnimationContextUninitialized<InitializedType = NSAnimationContext> extends NSObjectUninitialized<NSAnimationContext> {}
interface NSAnimationContext extends NSObject {

  duration(): NSTimeInterval;
  setDuration(duration: NSTimeInterval): void;
  timingFunction(): CAMediaTimingFunction;
  setTimingFunction(timingFunction: CAMediaTimingFunction): void;
  allowsImplicitAnimation(): boolean;
  setAllowsImplicitAnimation(allowsImplicitAnimation: boolean): void;
}
declare const NSAnimationContext: {
  alloc(): NSAnimationContextUninitialized;
  class(): NSAnimationContext;  runAnimationGroup_completionHandler(changes: Block, completionHandler: Block | null): void;
  runAnimationGroup(changes: Block): void;
  beginGrouping(): void;
  endGrouping(): void;

  currentContext(): NSAnimationContext;

}

