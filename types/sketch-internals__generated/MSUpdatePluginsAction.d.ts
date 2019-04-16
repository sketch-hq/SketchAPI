interface MSUpdatePluginsActionUninitialized<InitializedType = MSUpdatePluginsAction> extends MSDocumentActionUninitialized<MSUpdatePluginsAction> {}
interface MSUpdatePluginsAction extends MSDocumentAction, IMSWindowBadgeAction {
}
declare const MSUpdatePluginsAction: {
  alloc(): MSUpdatePluginsActionUninitialized;
  class(): MSUpdatePluginsAction;
}

