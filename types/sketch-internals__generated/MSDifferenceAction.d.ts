interface MSDifferenceActionUninitialized<InitializedType = MSDifferenceAction> extends MSBaseBooleanActionUninitialized<MSDifferenceAction> {}

interface MSDifferenceAction extends MSBaseBooleanAction {
  booleanDifference(sender: any): IBAction;
}

declare const MSDifferenceAction: {
  alloc(): MSDifferenceActionUninitialized;
  class(): MSDifferenceAction;
}

