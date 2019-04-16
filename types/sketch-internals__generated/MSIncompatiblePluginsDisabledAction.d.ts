interface MSIncompatiblePluginsDisabledActionUninitialized<InitializedType = MSIncompatiblePluginsDisabledAction> extends MSDocumentActionUninitialized<MSIncompatiblePluginsDisabledAction> {}

interface MSIncompatiblePluginsDisabledAction extends MSDocumentAction, IMSWindowBadgeAction {

  numberOfBadges(): NSUInteger;
  badgeTitle(): NSAttributedString;
  badgeTint(): NSColor;
}

declare const MSIncompatiblePluginsDisabledAction: {
  alloc(): MSIncompatiblePluginsDisabledActionUninitialized;
  class(): MSIncompatiblePluginsDisabledAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

