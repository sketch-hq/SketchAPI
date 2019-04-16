interface NSBitmapImageRepUninitialized<InitializedType = NSBitmapImageRep> extends NSImageRepUninitialized<NSBitmapImageRep> {
  initWithFocusedViewRect(rect: NSRect): InitializedType;
  initWithBitmapDataPlanes_pixelsWide_pixelsHigh_bitsPerSample_samplesPerPixel_hasAlpha_isPlanar_colorSpaceName_bytesPerRow_bitsPerPixel(planes: string, width: NSInteger, height: NSInteger, bps: NSInteger, spp: NSInteger, alpha: boolean, isPlanar: boolean, colorSpaceName: NSColorSpaceName, rBytes: NSInteger, pBits: NSInteger): InitializedType;
  initWithBitmapDataPlanes_pixelsWide_pixelsHigh_bitsPerSample_samplesPerPixel_hasAlpha_isPlanar_colorSpaceName_bitmapFormat_bytesPerRow_bitsPerPixel(planes: string, width: NSInteger, height: NSInteger, bps: NSInteger, spp: NSInteger, alpha: boolean, isPlanar: boolean, colorSpaceName: NSColorSpaceName, bitmapFormat: NSBitmapFormat, rBytes: NSInteger, pBits: NSInteger): InitializedType;
  initWithCGImage(cgImage: CGImageRef): InitializedType;
  initWithCIImage(ciImage: CIImage): InitializedType;
  initWithData(data: NSData): InitializedType;
  initForIncrementalLoad(): InitializedType;
}
interface NSBitmapImageRep extends NSImageRep, INSSecureCoding {
  getBitmapDataPlanes(data: string): void;
  getCompression_factor(compression: NSTIFFCompression | null, factor: number | null): void;
  setCompression_factor(compression: NSTIFFCompression, factor: number): void;
  TIFFRepresentationUsingCompression_factor(comp: NSTIFFCompression, factor: number): NSData;
  canBeCompressedUsing(compression: NSTIFFCompression): boolean;
  colorizeByMappingGray_toColor_blackMapping_whiteMapping(midPoint: CGFloat, midPointColor: NSColor | null, shadowColor: NSColor | null, lightColor: NSColor | null): void;
  incrementalLoadFromData_complete(data: NSData, complete: boolean): NSInteger;
  setColor_atX_y(color: NSColor, x: NSInteger, y: NSInteger): void;
  colorAtX_y(x: NSInteger, y: NSInteger): NSColor;
  getPixel_atX_y(p: NSUInteger[], x: NSInteger, y: NSInteger): void;
  setPixel_atX_y(p: NSUInteger[], x: NSInteger, y: NSInteger): void;
  bitmapImageRepByConvertingToColorSpace_renderingIntent(targetSpace: NSColorSpace, renderingIntent: NSColorRenderingIntent): NSBitmapImageRep;
  bitmapImageRepByRetaggingWithColorSpace(newSpace: NSColorSpace): NSBitmapImageRep;
  representationUsingType_properties(storageType: NSBitmapImageFileType, properties: NSDictionary<any, any> | {[key: string]: any}): NSData;
  setProperty_withValue(property: NSBitmapImageRepPropertyKey, value: any | null): void;
  valueForProperty(property: NSBitmapImageRepPropertyKey): any;
  JPGRepresentationWithCompression_progressive(compression: CGFloat, progressive: boolean): NSData;
  PNGRepresentationWithInterlaced(interlaced: boolean): NSData;
  PNGRepresentationWithInterlaced_includeAlpha(interlaced: boolean, includeAlpha: boolean): NSData;
  rectForTrimming(): NSRect;
  rectForTrimming(isBlankImage: boolean): NSRect;
  bitmapImageRepByCroppingToRect(r: NSRect): NSBitmapImageRep;
  bitmapImageRepByFlippingVertical(): NSBitmapImageRep;
  bitSafeBitmapImageRep(): NSBitmapImageRep;
  bitSafeFastRectForTrimming(): NSRect;
  bitSafeFastRectForTrimming(isBlankImage: boolean): NSRect;
  hasTransparentPixels(): boolean;

  bitmapData(): string;
  planar(): boolean;
  samplesPerPixel(): NSInteger;
  bitsPerPixel(): NSInteger;
  bytesPerRow(): NSInteger;
  bytesPerPlane(): NSInteger;
  numberOfPlanes(): NSInteger;
  bitmapFormat(): NSBitmapFormat;
  TIFFRepresentation(): NSData;
  CGImage(): CGImageRef;
  colorSpace(): NSColorSpace;
}
declare const NSBitmapImageRep: {
  alloc(): NSBitmapImageRepUninitialized;
  class(): NSBitmapImageRep;  imageRepsWithData(data: NSData): NSArray<any>;
  imageRepWithData(data: NSData): NSBitmapImageRep;
  TIFFRepresentationOfImageRepsInArray(array: NSArray<any> | any[]): NSData;
  TIFFRepresentationOfImageRepsInArray_usingCompression_factor(array: NSArray<any> | any[], comp: NSTIFFCompression, factor: number): NSData;
  getTIFFCompressionTypes_count(list: NSTIFFCompression, numTypes: NSInteger): void;
  localizedNameForTIFFCompressionType(compression: NSTIFFCompression): NSString;
  representationOfImageRepsInArray_usingType_properties(imageReps: NSArray<any> | any[], storageType: NSBitmapImageFileType, properties: NSDictionary<any, any> | {[key: string]: any}): NSData;
  bitmapImageRepWithSize_flags_colorSpace_drawingBlock(size: NSSize, flags: DKCGContextCreateFlags, space: NSColorSpace, block: CGContextDrawBlock): NSBitmapImageRep;
  bitmapImageRepWithSize_pixelSize_flags_colorSpace_drawingBlock(size: NSSize, pixelSize: NSSize, flags: DKCGContextCreateFlags, space: NSColorSpace, block: CGContextDrawBlock): NSBitmapImageRep;

}

