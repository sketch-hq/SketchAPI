interface MSBadgeMenuActionUninitialized<InitializedType = MSBadgeMenuAction> extends MSDocumentActionUninitialized<MSBadgeMenuAction> {}

interface MSBadgeMenuAction extends MSDocumentAction, IMSWindowBadgeAction {

  numberOfBadges(): NSUInteger;
  badgeTitle(): NSAttributedString;
  badgeTint(): NSColor;
}

declare const MSBadgeMenuAction: {
  alloc(): MSBadgeMenuActionUninitialized;
  class(): MSBadgeMenuAction;
}

