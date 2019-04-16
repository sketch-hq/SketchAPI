interface MSSyncLibraryActionUninitialized<InitializedType = MSSyncLibraryAction> extends MSDocumentActionUninitialized<MSSyncLibraryAction> {}

interface MSSyncLibraryAction extends MSDocumentAction, IMSWindowBadgeAction {

  numberOfBadges(): NSUInteger;
  badgeTitle(): NSAttributedString;
  badgeTint(): NSColor;
}

declare const MSSyncLibraryAction: {
  alloc(): MSSyncLibraryActionUninitialized;
  class(): MSSyncLibraryAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

