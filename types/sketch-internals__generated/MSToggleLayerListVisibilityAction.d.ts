interface MSToggleLayerListVisibilityActionUninitialized<InitializedType = MSToggleLayerListVisibilityAction> extends MSToggleVisibilityActionUninitialized<MSToggleLayerListVisibilityAction> {}

interface MSToggleLayerListVisibilityAction extends MSToggleVisibilityAction {
  toggleLayerListVisibility(sender: any): IBAction;
}

declare const MSToggleLayerListVisibilityAction: {
  alloc(): MSToggleLayerListVisibilityActionUninitialized;
  class(): MSToggleLayerListVisibilityAction;
}

