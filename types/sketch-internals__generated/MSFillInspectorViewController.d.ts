interface MSFillInspectorViewControllerUninitialized<InitializedType = MSFillInspectorViewController> extends MSColorStylePartInspectorViewControllerUninitialized<MSFillInspectorViewController> {}

interface MSFillInspectorViewController extends MSColorStylePartInspectorViewController {

  opacityField(): MSInlineUpDownNanoTextField;
  setOpacityField(opacityField: MSInlineUpDownNanoTextField): void;
  fillPropertiesPopUp(): NSPopUpButton;
  setFillPropertiesPopUp(fillPropertiesPopUp: NSPopUpButton): void;
}

declare const MSFillInspectorViewController: {
  alloc(): MSFillInspectorViewControllerUninitialized;
  class(): MSFillInspectorViewController;
  fillTypeStringForFillType(fillType: BCFillType): NSString;
}

