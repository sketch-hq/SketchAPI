interface MSDocumentControllerUninitialized<InitializedType = MSDocumentController> extends NSDocumentControllerUninitialized<MSDocumentController> {}

interface MSDocumentController extends NSDocumentController {
  openDocumentWithContentsOfURL_display_context_callback(url: NSURL, displayDocument: boolean, coscript: COScript, callback: MOJavaScriptObject | Function): void;
}

declare const MSDocumentController: {
  alloc(): MSDocumentControllerUninitialized;
  class(): MSDocumentController;
  enumerateOpenDocuments(block: MSDocumentIteratorBlock): void;
  sharedDocumentController(): NSDocumentController;
  accessInstanceVariablesDirectly(): boolean;

}

