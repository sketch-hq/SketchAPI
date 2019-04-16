interface MSCopyCSSAttributesActionUninitialized<InitializedType = MSCopyCSSAttributesAction> extends MSDocumentActionUninitialized<MSCopyCSSAttributesAction> {}
interface MSCopyCSSAttributesAction extends MSDocumentAction {
  copyCSSAttributes(sender: any): IBAction;
}
declare const MSCopyCSSAttributesAction: {
  alloc(): MSCopyCSSAttributesActionUninitialized;
  class(): MSCopyCSSAttributesAction;
}

