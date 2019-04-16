interface MSReplaceFontsActionUninitialized<InitializedType = MSReplaceFontsAction> extends MSDocumentActionUninitialized<MSReplaceFontsAction> {}
interface MSReplaceFontsAction extends MSDocumentAction, IMSWindowBadgeAction {
  replaceMissingFonts(sender: any): IBAction;
}
declare const MSReplaceFontsAction: {
  alloc(): MSReplaceFontsActionUninitialized;
  class(): MSReplaceFontsAction;
}

