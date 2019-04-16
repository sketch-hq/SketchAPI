interface MSCallToActionButtonUninitialized<InitializedType = MSCallToActionButton> extends MSHoverButtonUninitialized<MSCallToActionButton> {}
interface MSCallToActionButton extends MSHoverButton {
}
declare const MSCallToActionButton: {
  alloc(): MSCallToActionButtonUninitialized;
  class(): MSCallToActionButton;
}

