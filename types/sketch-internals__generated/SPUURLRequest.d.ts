interface SPUURLRequestUninitialized<InitializedType = SPUURLRequest> extends NSObjectUninitialized<SPUURLRequest> {}
interface SPUURLRequest extends NSObject, INSSecureCoding {

  request(): NSURLRequest;
}
declare const SPUURLRequest: {
  alloc(): SPUURLRequestUninitialized;
  class(): SPUURLRequest;  URLRequestWithRequest(request: NSURLRequest): SPUURLRequest;

}

