interface MSRemoveSelectedOverridesActionUninitialized<InitializedType = MSRemoveSelectedOverridesAction> extends MSOverrideActionUninitialized<MSRemoveSelectedOverridesAction> {}
interface MSRemoveSelectedOverridesAction extends MSOverrideAction {
  removeSelectedOverrides(sender: any): void;
}
declare const MSRemoveSelectedOverridesAction: {
  alloc(): MSRemoveSelectedOverridesActionUninitialized;
  class(): MSRemoveSelectedOverridesAction;
}

