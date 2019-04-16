interface MSShadowInspectorViewControllerUninitialized<InitializedType = MSShadowInspectorViewController> extends MSColorStylePartInspectorViewControllerUninitialized<MSShadowInspectorViewController> {}

interface MSShadowInspectorViewController extends MSColorStylePartInspectorViewController {

  type(): NSString;
  setType(type: NSString | string): void;
}

declare const MSShadowInspectorViewController: {
  alloc(): MSShadowInspectorViewControllerUninitialized;
  class(): MSShadowInspectorViewController;
  fillTypeStringForFillType(fillType: BCFillType): NSString;
}

