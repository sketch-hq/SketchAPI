interface INSConnectionDelegate {
  makeNewConnection_sender(conn: NSConnection, ancestor: NSConnection): boolean;
  connection_shouldMakeNewConnection(ancestor: NSConnection, conn: NSConnection): boolean;
  authenticationDataForComponents(components: NSArray<any> | any[]): NSData;
  authenticateComponents_withData(components: NSArray<any> | any[], signature: NSData): boolean;
  createConversationForConnection(conn: NSConnection): any;
  connection_handleRequest(connection: NSConnection, doreq: NSDistantObjectRequest): boolean;
}

