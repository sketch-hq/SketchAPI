interface CAPropertyAnimationUninitialized<InitializedType = CAPropertyAnimation> extends CAAnimationUninitialized<CAPropertyAnimation> {}

interface CAPropertyAnimation extends CAAnimation {

  keyPath(): NSString;
  setKeyPath(keyPath: NSString | string): void;
  additive(): boolean;
  setAdditive(additive: boolean): void;
  cumulative(): boolean;
  setCumulative(cumulative: boolean): void;
  valueFunction(): CAValueFunction;
  setValueFunction(valueFunction: CAValueFunction): void;
}

declare const CAPropertyAnimation: {
  alloc(): CAPropertyAnimationUninitialized;
  class(): CAPropertyAnimation;
  animationWithKeyPath(path: NSString | string | null): CAPropertyAnimation;
  animation(): CAPropertyAnimation;
  defaultValueForKey(key: NSString | string): any;
  accessInstanceVariablesDirectly(): boolean;

}

