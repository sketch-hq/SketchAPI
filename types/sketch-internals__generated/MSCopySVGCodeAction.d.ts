interface MSCopySVGCodeActionUninitialized<InitializedType = MSCopySVGCodeAction> extends MSDocumentActionUninitialized<MSCopySVGCodeAction> {}

interface MSCopySVGCodeAction extends MSDocumentAction {
  copySVG(sender: any): IBAction;
}

declare const MSCopySVGCodeAction: {
  alloc(): MSCopySVGCodeActionUninitialized;
  class(): MSCopySVGCodeAction;
}

