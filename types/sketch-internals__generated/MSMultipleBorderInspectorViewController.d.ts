interface MSMultipleBorderInspectorViewControllerUninitialized<InitializedType = MSMultipleBorderInspectorViewController> extends MSMultipleColorStylePartInspectorViewControllerUninitialized<MSMultipleBorderInspectorViewController> {}
interface MSMultipleBorderInspectorViewController extends MSMultipleColorStylePartInspectorViewController, IBCPopoverDelegate {
  showAdvancedOptionsAction(sender: any): IBAction;
  styleDidEnableOrDisable(): void;

  borderOptionsController(): MSBorderOptionsInspectorViewController;
  thicknessLabel(): MSTextLabelForUpDownField;
  setThicknessLabel(thicknessLabel: MSTextLabelForUpDownField): void;
  addStylePartButton(): NSButton;
  setAddStylePartButton(addStylePartButton: NSButton): void;
}
declare const MSMultipleBorderInspectorViewController: {
  alloc(): MSMultipleBorderInspectorViewControllerUninitialized;
  class(): MSMultipleBorderInspectorViewController;
}

