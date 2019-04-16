interface MSExportPreviewViewUninitialized<InitializedType = MSExportPreviewView> extends NSViewUninitialized<MSExportPreviewView> {
  initWithViewModel(viewModel: MSExportPreviewViewModel): InitializedType;
}
interface MSExportPreviewView extends NSView, INSDraggingSource, INSPasteboardWriting {

  viewModel(): MSExportPreviewViewModel;
  setViewModel(viewModel: MSExportPreviewViewModel): void;
}
declare const MSExportPreviewView: {
  alloc(): MSExportPreviewViewUninitialized;
  class(): MSExportPreviewView;
}

