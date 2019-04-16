interface MSHoverButtonUninitialized<InitializedType = MSHoverButton> extends NSButtonUninitialized<MSHoverButton> {}
interface MSHoverButton extends NSButton {

  mouseIsHovering(): boolean;
  setMouseIsHovering(mouseIsHovering: boolean): void;
}
declare const MSHoverButton: {
  alloc(): MSHoverButtonUninitialized;
  class(): MSHoverButton;
}

