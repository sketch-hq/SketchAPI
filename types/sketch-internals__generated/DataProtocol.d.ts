interface DataProtocolUninitialized<InitializedType = DataProtocol> extends NSURLProtocolUninitialized<DataProtocol> {}
interface DataProtocol extends NSURLProtocol {
}
declare const DataProtocol: {
  alloc(): DataProtocolUninitialized;
  class(): DataProtocol;  dataFromLink_type_encoding(link: NSString | string, typeOut: NSString | string, encodingOut: NSString | string): NSData;

}

