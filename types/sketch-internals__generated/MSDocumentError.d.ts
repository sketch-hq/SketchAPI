interface MSDocumentErrorUninitialized<InitializedType = MSDocumentError> extends NSErrorUninitialized<MSDocumentError> {}

interface MSDocumentError extends NSError {
}

declare const MSDocumentError: {
  alloc(): MSDocumentErrorUninitialized;
  class(): MSDocumentError;
  errorWithCode(code: MSDocumentErrorCode): MSDocumentError;
  errorWithDomain_code_userInfo(domain: NSErrorDomain, code: NSInteger, dict: NSDictionary<any, any> | {[key: string]: any} | null): MSDocumentError;
  setUserInfoValueProviderForDomain_provider(errorDomain: NSErrorDomain, provider: Block): void;
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

