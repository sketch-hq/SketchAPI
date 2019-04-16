interface MSSpecialLayerViewControllerUninitialized<InitializedType = MSSpecialLayerViewController> extends MSNestedInspectorSectionUninitialized<MSSpecialLayerViewController> {}
interface MSSpecialLayerViewController extends MSNestedInspectorSection, INSMenuDelegate {
  changeTextLayerFont(sender: any | null): IBAction;
  valuesPossiblyChanged(): void;

  textSection(): MSBaseInspectorSection;
  symbolInstanceSection(): MSBaseInspectorSection;
}
declare const MSSpecialLayerViewController: {
  alloc(): MSSpecialLayerViewControllerUninitialized;
  class(): MSSpecialLayerViewController;
}

