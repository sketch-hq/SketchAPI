interface TDTrackExceptionUninitialized<InitializedType = TDTrackException> extends NSExceptionUninitialized<TDTrackException> {}
interface TDTrackException extends NSException {
}
declare const TDTrackException: {
  alloc(): TDTrackExceptionUninitialized;
  class(): TDTrackException;
}

