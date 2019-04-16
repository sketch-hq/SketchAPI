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
  registerImageRepClass(imageRepClass: any): void;
  unregisterImageRepClass(imageRepClass: any): void;
  imageRepClassForFileType(type: NSString | string): any;
  imageRepClassForPasteboardType(type: NSPasteboardType): any;
  imageRepClassForType(type: NSString | string): any;
  imageRepClassForData(data: NSData): any;
  canInitWithData(data: NSData): boolean;
  imageUnfilteredFileTypes(): NSArray<any>;
  imageUnfilteredPasteboardTypes(): NSArray<any>;
  imageFileTypes(): NSArray<any>;
  imagePasteboardTypes(): NSArray<any>;
  canInitWithPasteboard(pasteboard: NSPasteboard): boolean;
  imageRepsWithContentsOfFile(filename: NSString | string): NSArray<any>;
  imageRepWithContentsOfFile(filename: NSString | string): NSImageRep;
  imageRepsWithContentsOfURL(url: NSURL): NSArray<any>;
  imageRepWithContentsOfURL(url: NSURL): NSImageRep;
  imageRepsWithPasteboard(pasteboard: NSPasteboard): NSArray<any>;
  imageRepWithPasteboard(pasteboard: NSPasteboard): NSImageRep;
  registeredImageRepClasses(): NSArray<any>;
  imageUnfilteredTypes(): NSArray<any>;
  imageTypes(): NSArray<any>;

}

