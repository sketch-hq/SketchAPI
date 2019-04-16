interface NSDistantObjectRequestUninitialized<InitializedType = NSDistantObjectRequest> extends NSObjectUninitialized<NSDistantObjectRequest> {}
interface NSDistantObjectRequest extends NSObject {
  replyWithException(exception: NSException | Error | null): void;

  invocation(): NSInvocation;
  connection(): NSConnection;
  conversation(): any;
}
declare const NSDistantObjectRequest: {
  alloc(): NSDistantObjectRequestUninitialized;
  class(): NSDistantObjectRequest;
}

