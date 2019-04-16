interface MSBottomSeparatorConfigurableViewUninitialized<InitializedType = MSBottomSeparatorConfigurableView> extends MSSeparatorConfigurableViewUninitialized<MSBottomSeparatorConfigurableView> {}
interface MSBottomSeparatorConfigurableView extends MSSeparatorConfigurableView {

  wantsBottomSeparator(): boolean;
  setWantsBottomSeparator(wantsBottomSeparator: boolean): void;
}
declare const MSBottomSeparatorConfigurableView: {
  alloc(): MSBottomSeparatorConfigurableViewUninitialized;
  class(): MSBottomSeparatorConfigurableView;
}

