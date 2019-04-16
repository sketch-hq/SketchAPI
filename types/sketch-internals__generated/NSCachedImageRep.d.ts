interface NSCachedImageRepUninitialized<InitializedType = NSCachedImageRep> extends NSImageRepUninitialized<NSCachedImageRep> {
  initWithWindow_rect(win: NSWindow, rect: NSRect): InitializedType;
  initWithSize_depth_separate_alpha(size: NSSize, depth: NSWindowDepth, flag: boolean, alpha: boolean): InitializedType;
}

interface NSCachedImageRep extends NSImageRep {
  window(): NSWindow;
  rect(): NSRect;
}

declare const NSCachedImageRep: {
  alloc(): NSCachedImageRepUninitialized;
  class(): NSCachedImageRep;
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

