interface BCMagnifierButtonUninitialized<InitializedType = BCMagnifierButton> extends MSInspectorButtonUninitialized<BCMagnifierButton> {}
interface BCMagnifierButton extends MSInspectorButton {

  delegate(): any;
  setDelegate(delegate: any): void;
  color(): MSFlexibleColor;
}
declare const BCMagnifierButton: {
  alloc(): BCMagnifierButtonUninitialized;
  class(): BCMagnifierButton;
}

