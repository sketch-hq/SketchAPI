interface MSTogglePixelLinesActionUninitialized<InitializedType = MSTogglePixelLinesAction> extends MSToggleViewPreferenceActionUninitialized<MSTogglePixelLinesAction> {}

interface MSTogglePixelLinesAction extends MSToggleViewPreferenceAction {
  togglePixelLines(sender: any): IBAction;
}

declare const MSTogglePixelLinesAction: {
  alloc(): MSTogglePixelLinesActionUninitialized;
  class(): MSTogglePixelLinesAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

