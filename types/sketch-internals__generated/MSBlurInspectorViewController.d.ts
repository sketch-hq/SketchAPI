interface MSBlurInspectorViewControllerUninitialized<InitializedType = MSBlurInspectorViewController> extends MSStylePartInspectorViewControllerUninitialized<MSBlurInspectorViewController> {}
interface MSBlurInspectorViewController extends MSStylePartInspectorViewController, INSMenuDelegate {
}
declare const MSBlurInspectorViewController: {
  alloc(): MSBlurInspectorViewControllerUninitialized;
  class(): MSBlurInspectorViewController;
}

