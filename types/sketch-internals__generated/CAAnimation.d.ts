interface CAAnimationUninitialized<InitializedType = CAAnimation> extends NSObjectUninitialized<CAAnimation> {}
interface CAAnimation extends NSObject {
  shouldArchiveValueForKey(key: NSString | string): boolean;

  timingFunction(): CAMediaTimingFunction;
  setTimingFunction(timingFunction: CAMediaTimingFunction): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  removedOnCompletion(): boolean;
  setRemovedOnCompletion(removedOnCompletion: boolean): void;
}
declare const CAAnimation: {
  alloc(): CAAnimationUninitialized;
  class(): CAAnimation;  animation(): CAAnimation;
  defaultValueForKey(key: NSString | string): any;

}

