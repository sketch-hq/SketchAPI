interface NSCustomImageRepUninitialized<InitializedType = NSCustomImageRep> extends NSImageRepUninitialized<NSCustomImageRep> {
  initWithSize_flipped_drawingHandler(size: NSSize, drawingHandlerShouldBeCalledWithFlippedContext: boolean, drawingHandler: Block): InitializedType;
  initWithDrawSelector_delegate(selector: string, delegate: any): InitializedType;
}
interface NSCustomImageRep extends NSImageRep {

  drawSelector(): string;
  delegate(): any;
}
declare const NSCustomImageRep: {
  alloc(): NSCustomImageRepUninitialized;
  class(): NSCustomImageRep;
}

