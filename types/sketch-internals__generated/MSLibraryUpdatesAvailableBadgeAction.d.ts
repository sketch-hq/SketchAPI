interface MSLibraryUpdatesAvailableBadgeActionUninitialized<InitializedType = MSLibraryUpdatesAvailableBadgeAction> extends MSActionUninitialized<MSLibraryUpdatesAvailableBadgeAction> {}

interface MSLibraryUpdatesAvailableBadgeAction extends MSAction, IMSWindowBadgeAction {

  numberOfBadges(): NSUInteger;
  badgeTitle(): NSAttributedString;
  badgeTint(): NSColor;
}

declare const MSLibraryUpdatesAvailableBadgeAction: {
  alloc(): MSLibraryUpdatesAvailableBadgeActionUninitialized;
  class(): MSLibraryUpdatesAvailableBadgeAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

