interface MSConvertToOutlinesActionUninitialized<InitializedType = MSConvertToOutlinesAction> extends MSDocumentActionUninitialized<MSConvertToOutlinesAction> {}
interface MSConvertToOutlinesAction extends MSDocumentAction {
  convertToOutlines(sender: any): IBAction;
}
declare const MSConvertToOutlinesAction: {
  alloc(): MSConvertToOutlinesActionUninitialized;
  class(): MSConvertToOutlinesAction;
}

