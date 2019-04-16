interface MSColorStylePartInspectorViewControllerUninitialized<InitializedType = MSColorStylePartInspectorViewController> extends MSStylePartInspectorViewControllerUninitialized<MSColorStylePartInspectorViewController> {}
interface MSColorStylePartInspectorViewController extends MSStylePartInspectorViewController {
  togglePopover(): void;
  openColorPanelPreferringNative(): void;
  checkBoxAction(sender: any): IBAction;

  colorButton(): MSStylePartPreviewButton;
  setColorButton(colorButton: MSStylePartPreviewButton): void;
  colorInspector(): MSColorInspector;
}
declare const MSColorStylePartInspectorViewController: {
  alloc(): MSColorStylePartInspectorViewControllerUninitialized;
  class(): MSColorStylePartInspectorViewController;  fillTypeStringForFillType(fillType: BCFillType): NSString;

}

