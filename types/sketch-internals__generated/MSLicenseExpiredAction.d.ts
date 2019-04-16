interface MSLicenseExpiredActionUninitialized<InitializedType = MSLicenseExpiredAction> extends MSDocumentActionUninitialized<MSLicenseExpiredAction> {}
interface MSLicenseExpiredAction extends MSDocumentAction, IMSWindowBadgeAction {
}
declare const MSLicenseExpiredAction: {
  alloc(): MSLicenseExpiredActionUninitialized;
  class(): MSLicenseExpiredAction;
}

