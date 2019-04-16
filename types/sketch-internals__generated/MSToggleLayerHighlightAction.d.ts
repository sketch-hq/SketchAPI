interface MSToggleLayerHighlightActionUninitialized<InitializedType = MSToggleLayerHighlightAction> extends MSToggleViewPreferenceActionUninitialized<MSToggleLayerHighlightAction> {}

interface MSToggleLayerHighlightAction extends MSToggleViewPreferenceAction {
  toggleLayerHighlight(sender: any): IBAction;
}

declare const MSToggleLayerHighlightAction: {
  alloc(): MSToggleLayerHighlightActionUninitialized;
  class(): MSToggleLayerHighlightAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

