interface BCReceiptValidationExceptionUninitialized<InitializedType = BCReceiptValidationException> extends NSExceptionUninitialized<BCReceiptValidationException> {}
interface BCReceiptValidationException extends NSException {

  status(): BCReceiptStatus;
}
declare const BCReceiptValidationException: {
  alloc(): BCReceiptValidationExceptionUninitialized;
  class(): BCReceiptValidationException;  exceptionWithStatus(status: BCReceiptStatus): BCReceiptValidationException;
  raiseWithStatus(status: BCReceiptStatus): void;
  raiseWithStatus_error(status: BCReceiptStatus, error: OSStatus): void;

}

