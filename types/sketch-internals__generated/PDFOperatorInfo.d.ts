interface PDFOperatorInfoUninitialized<InitializedType = PDFOperatorInfo> extends NSObjectUninitialized<PDFOperatorInfo> {}
interface PDFOperatorInfo extends NSObject {

  selector(): string;
  setSelector(selector: string): void;
  callback(): CGPDFOperatorCallback;
  setCallback(callback: CGPDFOperatorCallback): void;
  operatorName(): NSString;
  setOperatorName(operatorName: NSString | string): void;
  methodName(): NSString;
  setMethodName(methodName: NSString | string): void;
}
declare const PDFOperatorInfo: {
  alloc(): PDFOperatorInfoUninitialized;
  class(): PDFOperatorInfo;
}

