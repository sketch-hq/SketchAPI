interface INSNetServiceDelegate {
  netServiceWillPublish(sender: NSNetService): void;
  netServiceDidPublish(sender: NSNetService): void;
  netService_didNotPublish(sender: NSNetService, errorDict: NSDictionary<any, any> | {[key: string]: any}): void;
  netServiceWillResolve(sender: NSNetService): void;
  netServiceDidResolveAddress(sender: NSNetService): void;
  netService_didNotResolve(sender: NSNetService, errorDict: NSDictionary<any, any> | {[key: string]: any}): void;
  netServiceDidStop(sender: NSNetService): void;
  netService_didUpdateTXTRecordData(sender: NSNetService, data: NSData): void;
  netService_didAcceptConnectionWithInputStream_outputStream(sender: NSNetService, inputStream: NSInputStream, outputStream: NSOutputStream): void;
}

