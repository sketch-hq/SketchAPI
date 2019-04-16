interface MSManageForeignSymbolsViewUninitialized<InitializedType = MSManageForeignSymbolsView> extends NSViewControllerUninitialized<MSManageForeignSymbolsView> {}
interface MSManageForeignSymbolsView extends NSViewController {

  document(): MSDocument;
  setDocument(document: MSDocument): void;
}
declare const MSManageForeignSymbolsView: {
  alloc(): MSManageForeignSymbolsViewUninitialized;
  class(): MSManageForeignSymbolsView;
}

