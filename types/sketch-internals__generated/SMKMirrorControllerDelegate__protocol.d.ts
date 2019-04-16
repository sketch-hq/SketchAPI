interface ISMKMirrorControllerDelegate {
  mirrorController_didChangeClients(controller: SMKMirrorController, clients: NSArray<any> | any[] | null): void;
  mirrorController_didChangeWebURL(controller: SMKMirrorController, url: NSURL | null): void;
}

