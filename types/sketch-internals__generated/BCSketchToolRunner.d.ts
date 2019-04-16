interface BCSketchToolRunnerUninitialized<InitializedType = BCSketchToolRunner> extends BCToolRunnerUninitialized<BCSketchToolRunner> {
  initWithSketchToolURL_maximumConcurrentOperations(toolURL: NSURL, maxConcurrency: NSInteger): InitializedType;
}

interface BCSketchToolRunner extends BCToolRunner {
  exportPreviewImageForDocumentAtURL_additionalArguments_intoURL_completionHandler(url: NSURL, additionalArguments: NSArray<any> | any[], previewImageURL: NSURL, handler: MSDocumentPreviewImageHandler): void;

  sketchToolURL(): NSURL;
}

declare const BCSketchToolRunner: {
  alloc(): BCSketchToolRunnerUninitialized;
  class(): BCSketchToolRunner;
  accessInstanceVariablesDirectly(): boolean;

}

