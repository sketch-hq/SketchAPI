interface TDTrackExceptionUninitialized<InitializedType = TDTrackException> extends NSExceptionUninitialized<TDTrackException> {}

interface TDTrackException extends NSException {
}

declare const TDTrackException: {
  alloc(): TDTrackExceptionUninitialized;
  class(): TDTrackException;
  exceptionWithName_reason_userInfo(name: NSExceptionName, reason: NSString | string | null, userInfo: NSDictionary<any, any> | {[key: string]: any} | null): NSException;
  raise_format(name: NSExceptionName, format: NSString | string, ...args: any[]): void;
  raise_format_arguments(name: NSExceptionName, format: NSString | string, ...argList: any[]): void;
  accessInstanceVariablesDirectly(): boolean;

}

