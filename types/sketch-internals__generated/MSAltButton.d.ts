interface MSAltButtonUninitialized<InitializedType = MSAltButton> extends MSHoverButtonUninitialized<MSAltButton> {}
interface MSAltButton extends MSHoverButton {

  bc_weakTarget(): any;
  setBc_weakTarget(bc_weakTarget: any): void;
}
declare const MSAltButton: {
  alloc(): MSAltButtonUninitialized;
  class(): MSAltButton;
}

