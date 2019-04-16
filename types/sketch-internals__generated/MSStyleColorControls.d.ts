interface MSStyleColorControlsUninitialized<InitializedType = MSStyleColorControls> extends _MSStyleColorControlsUninitialized<MSStyleColorControls> {}
interface MSStyleColorControls extends _MSStyleColorControls {
  hasDefaultColorControlsValues(): boolean;
  resetToDefaultValues(): void;

  userVisibleContrast(): CGFloat;
  setUserVisibleContrast(userVisibleContrast: CGFloat): void;
}
declare const MSStyleColorControls: {
  alloc(): MSStyleColorControlsUninitialized;
  class(): MSStyleColorControls;
}

