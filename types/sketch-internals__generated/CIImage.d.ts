interface CIImageUninitialized<InitializedType = CIImage> {
  initWithBitmapImageRep(bitmapImageRep: NSBitmapImageRep): InitializedType;
}

interface CIImage {
  drawInRect_fromRect_operation_fraction(rect: NSRect, fromRect: NSRect, op: NSCompositingOperation, delta: CGFloat): void;
  drawAtPoint_fromRect_operation_fraction(point: NSPoint, fromRect: NSRect, op: NSCompositingOperation, delta: CGFloat): void;
  PNGRepresentationWithInterlaced(interlaced: boolean): NSData;
  imageByFlippingVertically(): CIImage;
}

declare const CIImage: {
  alloc(): CIImageUninitialized;
  class(): CIImage;
}

