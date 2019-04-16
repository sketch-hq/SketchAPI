interface PDFPatternUninitialized<InitializedType = PDFPattern> extends NSObjectUninitialized<PDFPattern> {
  initWithResource(resource: any): InitializedType;
}
interface PDFPattern extends NSObject {

  shadingType(): ShadingType;
  function(): PDFFunction;
  space(): any;
  coords(): NSArray<any>;
}
declare const PDFPattern: {
  alloc(): PDFPatternUninitialized;
  class(): PDFPattern;  patternWithResource(resource: any): PDFPattern;

}

