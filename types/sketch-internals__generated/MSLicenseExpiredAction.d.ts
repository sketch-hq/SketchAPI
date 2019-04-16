interface MSLicenseExpiredActionUninitialized<InitializedType = MSLicenseExpiredAction> extends MSDocumentActionUninitialized<MSLicenseExpiredAction> {}

interface MSLicenseExpiredAction extends MSDocumentAction, IMSWindowBadgeAction {

  numberOfBadges(): NSUInteger;
  badgeTitle(): NSAttributedString;
  badgeTint(): NSColor;
}

declare const MSLicenseExpiredAction: {
  alloc(): MSLicenseExpiredActionUninitialized;
  class(): MSLicenseExpiredAction;
}

