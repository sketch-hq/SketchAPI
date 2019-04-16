interface MSApplyLandscapeOrientationActionUninitialized<InitializedType = MSApplyLandscapeOrientationAction> extends MSApplyOrientationActionUninitialized<MSApplyLandscapeOrientationAction> {}

interface MSApplyLandscapeOrientationAction extends MSApplyOrientationAction {
  applyLandscapeOrientation(sender: any): IBAction;
}

declare const MSApplyLandscapeOrientationAction: {
  alloc(): MSApplyLandscapeOrientationActionUninitialized;
  class(): MSApplyLandscapeOrientationAction;
}

