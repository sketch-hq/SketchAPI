interface BCNetworkManagerUninitialized<InitializedType = BCNetworkManager> extends NSObjectUninitialized<BCNetworkManager> {}
interface BCNetworkManager extends NSObject {
}
declare const BCNetworkManager: {
  alloc(): BCNetworkManagerUninitialized;
  class(): BCNetworkManager;  sendSynchronousRequest_returningResponse_error(request: NSURLRequest, response: NSURLResponse, error: NSError): NSData;

}

