interface _MSInferredGroupLayoutUninitialized<InitializedType = _MSInferredGroupLayout> extends MSGroupLayoutUninitialized<_MSInferredGroupLayout> {}

interface _MSInferredGroupLayout extends MSGroupLayout {

  axis(): NSInteger;
  setAxis(axis: NSInteger): void;
}

declare const _MSInferredGroupLayout: {
  alloc(): _MSInferredGroupLayoutUninitialized;
  class(): _MSInferredGroupLayout;
}

