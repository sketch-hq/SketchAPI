interface NSNetServiceUninitialized<InitializedType = NSNetService> extends NSObjectUninitialized<NSNetService> {
  initWithDomain_type_name_port(domain: NSString | string, type: NSString | string, name: NSString | string, port: number): InitializedType;
  initWithDomain_type_name(domain: NSString | string, type: NSString | string, name: NSString | string): InitializedType;
}
interface NSNetService extends NSObject {
  scheduleInRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  removeFromRunLoop_forMode(aRunLoop: NSRunLoop, mode: NSRunLoopMode): void;
  publish(): void;
  publishWithOptions(options: NSNetServiceOptions): void;
  resolve(): void;
  stop(): void;
  resolveWithTimeout(timeout: NSTimeInterval): void;
  getInputStream_outputStream(inputStream: NSInputStream, outputStream: NSOutputStream): boolean;
  setTXTRecordData(recordData: NSData | null): boolean;
  TXTRecordData(): NSData;
  startMonitoring(): void;
  stopMonitoring(): void;

  delegate(): any;
  setDelegate(delegate: any): void;
  includesPeerToPeer(): boolean;
  setIncludesPeerToPeer(includesPeerToPeer: boolean): void;
  name(): NSString;
  type(): NSString;
  domain(): NSString;
  hostName(): NSString;
  addresses(): NSArray<any>;
  port(): NSInteger;
  addressStrings(): NSArray<any>;
}
declare const NSNetService: {
  alloc(): NSNetServiceUninitialized;
  class(): NSNetService;  dictionaryFromTXTRecordData(txtData: NSData): NSDictionary<any, any>;
  dataFromTXTRecordDictionary(txtDictionary: NSDictionary<any, any> | {[key: string]: any}): NSData;
  addressStringWithData(data: NSData): NSString;

}

