interface ISMKServerControllerDelegate {
  serverController_connectionsDidChange(controller: SMKServerController, connections: NSArray<any> | any[]): void;
}

