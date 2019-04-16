interface PDFScannerUninitialized<InitializedType = PDFScanner> extends NSObjectUninitialized<PDFScanner> {
  init(): InitializedType;
}
interface PDFScanner extends NSObject {
  scanPage_parser_isPasted(page: CGPDFPageRef, parser: PDFParser, isPasted: boolean): void;
  scanStream_dictionary(stream: CGPDFContentStreamRef, dictionary: NSDictionary<any, any> | {[key: string]: any}): void;
  popBool(): boolean;
  popDouble(): CGFloat;
  popInteger(): NSInteger;
  popRGBColor(): NSColor;
  popCMYKColor(): NSColor;
  popNumber(): NSNumber;
  popPoint(): NSPoint;
  popString(): PDFString;
  popName(): NSString;
  popTransform(): NSAffineTransform;
  popArray(): NSArray<any>;
  popObject(): any;
  colorSpaceWithInfo_mapping(info: any, mapping: PDFFunction): NSColorSpace;
  gradientForPattern(pattern: PDFPattern): NSGradient;
  currentPoint(): NSPoint;
  currentLeading(): CGFloat;
  currentFillColorSpace(): NSColorSpace;
  currentFillColorSpaceMapping(): PDFFunction;
  currentStrokeColorSpace(): NSColorSpace;
  currentStrokeColorSpaceMapping(): PDFFunction;
  currentFont(): NSDictionary<any, any>;
  moveTo(point: NSPoint): void;
  lineTo(point: NSPoint): void;
  curveTo_control1_control2(point: NSPoint, control1: NSPoint, control2: NSPoint): void;
  closePath(): void;
  endPath(): void;
  appendRectangle(rectangle: NSRect): void;
  defineMarkedPoint(): void;
  processXObject(object: PDFStream): void;
  processForm(form: PDFStream): void;
  processImage_info(image: NSImage, info: NSDictionary<any, any> | {[key: string]: any}): void;
  concatMatrix(transform: NSAffineTransform): void;
  saveGraphicState(): void;
  restoreGraphicState(): void;
  setLineWidth(width: CGFloat): void;
  setLineJoin(join: NSUInteger): void;
  setLineCap(cap: NSUInteger): void;
  setLineDash_phase(dashes: NSArray<any> | any[], phase: NSInteger): void;
  setMitreLimit(limit: CGFloat): void;
  setStrokeColourSpace_mapping(space: NSColorSpace, mapping: PDFFunction): void;
  setFillColourSpace_mapping(space: NSColorSpace, mapping: PDFFunction): void;
  setColourRenderingIntent(intent: CGColorRenderingIntent): void;
  setFillColour(colour: NSColor): void;
  setStrokeColour(colour: NSColor): void;
  setFillPattern(pattern: PDFPattern): void;
  setStrokePattern(pattern: PDFPattern): void;
  setFillAlphaConstant(alpha: CGFloat): void;
  setStrokeAlphaConstant(alpha: CGFloat): void;
  clipWithWinding(winding: NSWindingRule): void;
  fillWithWinding(winding: NSWindingRule): void;
  fillWithShadingPattern(pattern: PDFPattern): void;
  strokeWithWinding(winding: NSWindingRule): void;
  beginCompatibility(): void;
  endCompatibility(): void;
  beginMarkedContentWithProperty(): void;
  beginMarkedContent(): void;
  endMarkedContent(): void;
  beginImage(): void;
  setOverprintMode(mode: NSInteger): void;
  beginText(): void;
  setFontName_size_info(name: NSString | string, size: CGFloat, info: NSDictionary<any, any> | {[key: string]: any}): void;
  setTextCharacterSpacing(spacing: CGFloat): void;
  setTextWordSpacing(spacing: CGFloat): void;
  setTextLeading(spacing: CGFloat): void;
  setTextRise(spacing: CGFloat): void;
  setTextScale(spacing: CGFloat): void;
  setTextMode(mode: NSUInteger): void;
  setTextMatrix(matrix: NSAffineTransform): void;
  offset(offset: CGFloat): void;
  nextLineWithOffset(point: NSPoint): void;
  appendText(string: NSString | string): void;
  endText(): void;
  declareGlyph(): void;
  glyphBounds(): void;

  dictionary(): NSDictionary<any, any>;
  setDictionary(dictionary: NSDictionary<any, any> | {[key: string]: any}): void;
}
declare const PDFScanner: {
  alloc(): PDFScannerUninitialized;
  class(): PDFScanner;  convertObject(object: CGPDFObjectRef): any;
  convertArray(array: CGPDFArrayRef): NSArray<any>;
  convertDictionary(dictionary: CGPDFDictionaryRef): NSDictionary<any, any>;

}

