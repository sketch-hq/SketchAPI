interface MSDocumentErrorUninitialized<InitializedType = MSDocumentError> extends NSErrorUninitialized<MSDocumentError> {}
interface MSDocumentError extends NSError {
}
declare const MSDocumentError: {
  alloc(): MSDocumentErrorUninitialized;
  class(): MSDocumentError;  errorWithCode(code: MSDocumentErrorCode): MSDocumentError;

}

