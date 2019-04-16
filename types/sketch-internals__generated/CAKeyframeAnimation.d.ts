interface CAKeyframeAnimationUninitialized<InitializedType = CAKeyframeAnimation> extends CAPropertyAnimationUninitialized<CAKeyframeAnimation> {}

interface CAKeyframeAnimation extends CAPropertyAnimation {

  values(): NSArray<any>;
  setValues(values: NSArray<any> | any[]): void;
  path(): CGPathRef;
  setPath(path: CGPathRef): void;
  keyTimes(): NSArray<any>;
  setKeyTimes(keyTimes: NSArray<any> | any[]): void;
  timingFunctions(): NSArray<any>;
  setTimingFunctions(timingFunctions: NSArray<any> | any[]): void;
  calculationMode(): CAAnimationCalculationMode;
  setCalculationMode(calculationMode: CAAnimationCalculationMode): void;
  tensionValues(): NSArray<any>;
  setTensionValues(tensionValues: NSArray<any> | any[]): void;
  continuityValues(): NSArray<any>;
  setContinuityValues(continuityValues: NSArray<any> | any[]): void;
  biasValues(): NSArray<any>;
  setBiasValues(biasValues: NSArray<any> | any[]): void;
  rotationMode(): CAAnimationRotationMode;
  setRotationMode(rotationMode: CAAnimationRotationMode): void;
}

declare const CAKeyframeAnimation: {
  alloc(): CAKeyframeAnimationUninitialized;
  class(): CAKeyframeAnimation;
  animationWithKeyPath(path: NSString | string | null): CAKeyframeAnimation;
  accessInstanceVariablesDirectly(): boolean;

}

