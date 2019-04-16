interface MSMultipleFillInspectorViewControllerUninitialized<InitializedType = MSMultipleFillInspectorViewController> extends MSMultipleColorStylePartInspectorViewControllerUninitialized<MSMultipleFillInspectorViewController> {}
interface MSMultipleFillInspectorViewController extends MSMultipleColorStylePartInspectorViewController, IMSInspectorSection, IBCPopoverDelegate {
  showAdvancedOptionsAction(sender: any): IBAction;

  opacityLabel(): MSTextLabelForUpDownField;
  setOpacityLabel(opacityLabel: MSTextLabelForUpDownField): void;
}
declare const MSMultipleFillInspectorViewController: {
  alloc(): MSMultipleFillInspectorViewControllerUninitialized;
  class(): MSMultipleFillInspectorViewController;
}

