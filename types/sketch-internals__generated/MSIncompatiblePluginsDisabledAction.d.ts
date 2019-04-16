interface MSIncompatiblePluginsDisabledActionUninitialized<InitializedType = MSIncompatiblePluginsDisabledAction> extends MSDocumentActionUninitialized<MSIncompatiblePluginsDisabledAction> {}
interface MSIncompatiblePluginsDisabledAction extends MSDocumentAction, IMSWindowBadgeAction {
}
declare const MSIncompatiblePluginsDisabledAction: {
  alloc(): MSIncompatiblePluginsDisabledActionUninitialized;
  class(): MSIncompatiblePluginsDisabledAction;
}

