interface MSApplyPortraitOrientationActionUninitialized<InitializedType = MSApplyPortraitOrientationAction> extends MSApplyOrientationActionUninitialized<MSApplyPortraitOrientationAction> {}

interface MSApplyPortraitOrientationAction extends MSApplyOrientationAction {
  applyPortraitOrientation(sender: any): IBAction;
}

declare const MSApplyPortraitOrientationAction: {
  alloc(): MSApplyPortraitOrientationActionUninitialized;
  class(): MSApplyPortraitOrientationAction;
}

