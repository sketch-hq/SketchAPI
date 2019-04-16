interface BCReceiptValidationExceptionUninitialized<InitializedType = BCReceiptValidationException> extends NSExceptionUninitialized<BCReceiptValidationException> {}

interface BCReceiptValidationException extends NSException {

  status(): BCReceiptStatus;
}

declare const BCReceiptValidationException: {
  alloc(): BCReceiptValidationExceptionUninitialized;
  class(): BCReceiptValidationException;
  exceptionWithStatus(status: BCReceiptStatus): BCReceiptValidationException;
  raiseWithStatus(status: BCReceiptStatus): void;
  raiseWithStatus_error(status: BCReceiptStatus, error: OSStatus): void;
  exceptionWithName_reason_userInfo(name: NSExceptionName, reason: NSString | string | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null): NSException;
  raise_format(name: NSExceptionName, format: NSString | string, ...args: any[]): void;
  raise_format_arguments(name: NSExceptionName, format: NSString | string, ...argList: any[]): void;
  accessInstanceVariablesDirectly(): boolean;

}

