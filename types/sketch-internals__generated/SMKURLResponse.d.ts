interface SMKURLResponseUninitialized<InitializedType = SMKURLResponse> extends NSObjectUninitialized<SMKURLResponse> {}
interface SMKURLResponse extends NSObject, INSSecureCoding {

  request(): NSURLRequest;
  setRequest(request: NSURLRequest): void;
  response(): NSURLResponse;
  setResponse(response: NSURLResponse): void;
  data(): NSData;
  setData(data: NSData): void;
  error(): NSError;
  setError(error: NSError): void;
}
declare const SMKURLResponse: {
  alloc(): SMKURLResponseUninitialized;
  class(): SMKURLResponse;
}

