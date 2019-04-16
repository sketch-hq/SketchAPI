interface MSBlockAnimationUninitialized<InitializedType = MSBlockAnimation> extends CABasicAnimationUninitialized<MSBlockAnimation> {
  initWithBlock(aBlock: MSAnimationBlock): InitializedType;
}

interface MSBlockAnimation extends CABasicAnimation {
}

declare const MSBlockAnimation: {
  alloc(): MSBlockAnimationUninitialized;
  class(): MSBlockAnimation;
  accessInstanceVariablesDirectly(): boolean;

}

