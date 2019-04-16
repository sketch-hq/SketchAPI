interface CASpringAnimationUninitialized<InitializedType = CASpringAnimation> extends CABasicAnimationUninitialized<CASpringAnimation> {}
interface CASpringAnimation extends CABasicAnimation {

  mass(): CGFloat;
  setMass(mass: CGFloat): void;
  stiffness(): CGFloat;
  setStiffness(stiffness: CGFloat): void;
  damping(): CGFloat;
  setDamping(damping: CGFloat): void;
  initialVelocity(): CGFloat;
  setInitialVelocity(initialVelocity: CGFloat): void;
  settlingDuration(): CFTimeInterval;
}
declare const CASpringAnimation: {
  alloc(): CASpringAnimationUninitialized;
  class(): CASpringAnimation;
}

