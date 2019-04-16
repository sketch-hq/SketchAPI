interface MSReplaceFontsActionUninitialized<InitializedType = MSReplaceFontsAction> extends MSDocumentActionUninitialized<MSReplaceFontsAction> {}

interface MSReplaceFontsAction extends MSDocumentAction, IMSWindowBadgeAction {
  replaceMissingFonts(sender: any): IBAction;

  numberOfBadges(): NSUInteger;
  badgeTitle(): NSAttributedString;
  badgeTint(): NSColor;
}

declare const MSReplaceFontsAction: {
  alloc(): MSReplaceFontsActionUninitialized;
  class(): MSReplaceFontsAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

