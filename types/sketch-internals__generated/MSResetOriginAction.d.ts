interface MSResetOriginActionUninitialized<InitializedType = MSResetOriginAction> extends MSDocumentActionUninitialized<MSResetOriginAction> {}
interface MSResetOriginAction extends MSDocumentAction {
  resetRulerOrigin(sender: any): IBAction;
}
declare const MSResetOriginAction: {
  alloc(): MSResetOriginActionUninitialized;
  class(): MSResetOriginAction;
}

