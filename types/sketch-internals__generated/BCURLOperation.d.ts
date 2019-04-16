interface BCURLOperationUninitialized<InitializedType = BCURLOperation> extends BCOperationUninitialized<BCURLOperation> {}
interface BCURLOperation extends BCOperation {

  urlSession(): NSURLSession;
  setUrlSession(urlSession: NSURLSession): void;
}
declare const BCURLOperation: {
  alloc(): BCURLOperationUninitialized;
  class(): BCURLOperation;  defaultURLSession(): NSURLSession;

}

