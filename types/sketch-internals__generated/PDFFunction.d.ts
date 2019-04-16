interface PDFFunctionUninitialized<InitializedType = PDFFunction> extends NSObjectUninitialized<PDFFunction> {
  initWithInfo(info: any): InitializedType;
}
interface PDFFunction extends NSObject {
  mapInputs_toOutputs(inputs: PDFFunctionInput, outputs: PDFFunctionOutput): void;

  samples(): NSData;
  parameters(): NSDictionary<any, any>;
  numberOfInputComponents(): NSUInteger;
  numberOfOutputComponents(): NSUInteger;
  bitsPerSample(): NSUInteger;
  bytesPerSampleComponent(): NSUInteger;
  bytesPerSample(): NSUInteger;
  numberOfSamples(): NSUInteger;
  domain(): NSArray<any>;
  setDomain(domain: NSArray<any> | any[]): void;
}
declare const PDFFunction: {
  alloc(): PDFFunctionUninitialized;
  class(): PDFFunction;  functionWithInfo(info: any): PDFFunction;

}

