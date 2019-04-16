interface SUUpdateValidatorUninitialized<InitializedType = SUUpdateValidator> extends NSObjectUninitialized<SUUpdateValidator> {
  initWithDownloadPath_signatures_host(downloadPath: NSString | string, signatures: SUSignatures, host: SUHost): InitializedType;
}
interface SUUpdateValidator extends NSObject {
  validateDownloadPath(): boolean;
  validateWithUpdateDirectory(updateDirectory: NSString | string): boolean;
}
declare const SUUpdateValidator: {
  alloc(): SUUpdateValidatorUninitialized;
  class(): SUUpdateValidator;
}

