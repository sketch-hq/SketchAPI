interface MSChangeFontActionUninitialized<InitializedType = MSChangeFontAction> extends MSDocumentActionUninitialized<MSChangeFontAction> {}
interface MSChangeFontAction extends MSDocumentAction {
  changeTextLayerFont(sender: any): IBAction;
}
declare const MSChangeFontAction: {
  alloc(): MSChangeFontActionUninitialized;
  class(): MSChangeFontAction;
}

