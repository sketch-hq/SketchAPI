interface NSImageRepUninitialized<InitializedType = NSImageRep> extends NSObjectUninitialized<NSImageRep> {
  init(): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSImageRep extends NSObject, INSCopying, INSCoding {
  draw(): boolean;
  drawAtPoint(point: NSPoint): boolean;
  drawInRect(rect: NSRect): boolean;
  drawInRect_fromRect_operation_fraction_respectFlipped_hints(dstSpacePortionRect: NSRect, srcSpacePortionRect: NSRect, op: NSCompositingOperation, requestedAlpha: CGFloat, respectContextIsFlipped: boolean, hints: NSDictionary<any, any> | {[key: string]: any} | null): boolean;
  CGImageForProposedRect_context_hints_CF_RETURNS_NOT_RETAINED(proposedDestRect: NSRect | null, context: NSGraphicsContext | null, hints: NSDictionary<any, any> | {[key: string]: any} | null): CGImageRef;

  size(): NSSize;
  setSize(size: NSSize): void;
  alpha(): boolean;
  setAlpha(alpha: boolean): void;
  opaque(): boolean;
  setOpaque(opaque: boolean): void;
  colorSpaceName(): NSColorSpaceName;
  setColorSpaceName(colorSpaceName: NSColorSpaceName): void;
  bitsPerSample(): NSInteger;
  setBitsPerSample(bitsPerSample: NSInteger): void;
  pixelsWide(): NSInteger;
  setPixelsWide(pixelsWide: NSInteger): void;
  pixelsHigh(): NSInteger;
  setPixelsHigh(pixelsHigh: NSInteger): void;
  layoutDirection(): NSImageLayoutDirection;
  setLayoutDirection(layoutDirection: NSImageLayoutDirection): void;
}
declare const NSImageRep: {
  alloc(): NSImageRepUninitialized;
  class(): NSImageRep;  registerImageRepClass(imageRepClass: any): void;
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

