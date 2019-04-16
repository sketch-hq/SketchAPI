interface MSMultipleShadowInspectorViewControllerUninitialized<InitializedType = MSMultipleShadowInspectorViewController> extends MSMultipleColorStylePartInspectorViewControllerUninitialized<MSMultipleShadowInspectorViewController> {}
interface MSMultipleShadowInspectorViewController extends MSMultipleColorStylePartInspectorViewController {
  shouldDisableAddStylePartButton(): boolean;

  addStylePartButton(): NSButton;
  setAddStylePartButton(addStylePartButton: NSButton): void;
  buttonsTrailingConstraint(): NSLayoutConstraint;
  setButtonsTrailingConstraint(buttonsTrailingConstraint: NSLayoutConstraint): void;
}
declare const MSMultipleShadowInspectorViewController: {
  alloc(): MSMultipleShadowInspectorViewControllerUninitialized;
  class(): MSMultipleShadowInspectorViewController;
}

