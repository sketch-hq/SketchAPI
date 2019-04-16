interface MSBorderInspectorViewControllerUninitialized<InitializedType = MSBorderInspectorViewController> extends MSColorStylePartInspectorViewControllerUninitialized<MSBorderInspectorViewController> {}
interface MSBorderInspectorViewController extends MSColorStylePartInspectorViewController {
  enableAction(sender: any): IBAction;

  positionControl(): NSSegmentedControl;
  setPositionControl(positionControl: NSSegmentedControl): void;
  thicknessField(): MSUpDownTextField;
  setThicknessField(thicknessField: MSUpDownTextField): void;
}
declare const MSBorderInspectorViewController: {
  alloc(): MSBorderInspectorViewControllerUninitialized;
  class(): MSBorderInspectorViewController;
}

