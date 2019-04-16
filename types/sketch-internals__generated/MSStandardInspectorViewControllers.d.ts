interface MSStandardInspectorViewControllersUninitialized<InitializedType = MSStandardInspectorViewControllers> extends NSObjectUninitialized<MSStandardInspectorViewControllers> {}
interface MSStandardInspectorViewControllers extends NSObject {

  geometryViewController(): MSGeometryInspectorSection;
  resizeSection(): MSResizeInspectorSection;
  layoutSection(): MSLayoutInspectorSection;
  styleSection(): MSStyleInspectorSection;
  flowInspectorViewController(): MSFlowInspectorSection;
  appearanceInspectorSection(): MSAppearanceInspectorSection;
  specialLayerViewController(): MSSpecialLayerViewController;
  exportPreviewViewController(): MSExportPreviewInspectorSection;
}
declare const MSStandardInspectorViewControllers: {
  alloc(): MSStandardInspectorViewControllersUninitialized;
  class(): MSStandardInspectorViewControllers;
}

