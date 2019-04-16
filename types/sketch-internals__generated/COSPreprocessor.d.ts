interface COSPreprocessorUninitialized<InitializedType = COSPreprocessor> extends NSObjectUninitialized<COSPreprocessor> {}
interface COSPreprocessor extends NSObject {
}
declare const COSPreprocessor: {
  alloc(): COSPreprocessorUninitialized;
  class(): COSPreprocessor;  preprocessCode(sourceString: NSString | string): NSString;
  preprocessCode_withBaseURL(sourceString: NSString | string, base: NSURL): NSString;

}

