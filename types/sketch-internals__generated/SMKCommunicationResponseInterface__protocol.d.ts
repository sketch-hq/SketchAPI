interface ISMKCommunicationResponseInterface {
  connectionInfoDidChange(info: NSArray<any> | any[]): void;
  connectionStatusDidChange(info: SMKConnectionInfo): void;
  connectionAdvertisementDidChange(info: SMKConnectionInfo): void;
  connectionInfo_didReceiveData(info: SMKConnectionInfo, data: NSData): void;
}

