interface MSMirrorActionUninitialized<InitializedType = MSMirrorAction> extends MSDocumentActionUninitialized<MSMirrorAction> {}

interface MSMirrorAction extends MSDocumentAction, IMSWindowBadgeAction {

  numberOfBadges(): NSUInteger;
  badgeTitle(): NSAttributedString;
  badgeTint(): NSColor;
}

declare const MSMirrorAction: {
  alloc(): MSMirrorActionUninitialized;
  class(): MSMirrorAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

