interface ISMKCommunicationInterface {
  startUsingOptions_webPort(options: SMKCommunicationOptions, port: NSUInteger): void;
  connectionInfoWithReply(reply: Block): void;
  connect(connectionID: NSUUID): void;
  disconnect(connectionID: NSUUID): void;
  broadcastData(data: NSData): void;
  sendData_to(data: NSData, connectionID: NSUUID): void;
}

