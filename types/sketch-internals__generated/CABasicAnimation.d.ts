interface CABasicAnimationUninitialized<InitializedType = CABasicAnimation> extends CAPropertyAnimationUninitialized<CABasicAnimation> {}
interface CABasicAnimation extends CAPropertyAnimation {

  fromValue(): any;
  setFromValue(fromValue: any): void;
  toValue(): any;
  setToValue(toValue: any): void;
  byValue(): any;
  setByValue(byValue: any): void;
}
declare const CABasicAnimation: {
  alloc(): CABasicAnimationUninitialized;
  class(): CABasicAnimation;
}

