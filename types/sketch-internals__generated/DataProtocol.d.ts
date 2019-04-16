interface DataProtocolUninitialized<InitializedType = DataProtocol> extends NSURLProtocolUninitialized<DataProtocol> {}

interface DataProtocol extends NSURLProtocol {
}

declare const DataProtocol: {
  alloc(): DataProtocolUninitialized;
  class(): DataProtocol;
  dataFromLink_type_encoding(link: NSString | string, typeOut: MOPointer<NSString>, encodingOut: MOPointer<NSString>): NSData;
  canInitWithRequest(request: NSURLRequest): boolean;
  canonicalRequestForRequest(request: NSURLRequest): NSURLRequest;
  requestIsCacheEquivalent_toRequest(a: NSURLRequest, b: NSURLRequest): boolean;
  propertyForKey_inRequest(key: NSString | string, request: NSURLRequest): any;
  setProperty_forKey_inRequest(value: any, key: NSString | string, request: NSMutableURLRequest): void;
  removePropertyForKey_inRequest(key: NSString | string, request: NSMutableURLRequest): void;
  registerClass(protocolClass: any): boolean;
  unregisterClass(protocolClass: any): void;
  canInitWithTask(task: NSURLSessionTask): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

