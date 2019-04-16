interface MSLibraryUpdatesAvailableBadgeActionUninitialized<InitializedType = MSLibraryUpdatesAvailableBadgeAction> extends MSActionUninitialized<MSLibraryUpdatesAvailableBadgeAction> {}
interface MSLibraryUpdatesAvailableBadgeAction extends MSAction, IMSWindowBadgeAction {
}
declare const MSLibraryUpdatesAvailableBadgeAction: {
  alloc(): MSLibraryUpdatesAvailableBadgeActionUninitialized;
  class(): MSLibraryUpdatesAvailableBadgeAction;
}

