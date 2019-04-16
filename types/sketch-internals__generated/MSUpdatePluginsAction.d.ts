interface MSUpdatePluginsActionUninitialized<InitializedType = MSUpdatePluginsAction> extends MSDocumentActionUninitialized<MSUpdatePluginsAction> {}

interface MSUpdatePluginsAction extends MSDocumentAction, IMSWindowBadgeAction {

  numberOfBadges(): NSUInteger;
  badgeTitle(): NSAttributedString;
  badgeTint(): NSColor;
}

declare const MSUpdatePluginsAction: {
  alloc(): MSUpdatePluginsActionUninitialized;
  class(): MSUpdatePluginsAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

