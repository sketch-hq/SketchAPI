interface SMKWebServerControllerUninitialized<InitializedType = SMKWebServerController> extends SMKServerControllerUninitialized<SMKWebServerController> {
  initWithServerPort(port: NSUInteger): InitializedType;
}
interface SMKWebServerController extends SMKServerController {
}
declare const SMKWebServerController: {
  alloc(): SMKWebServerControllerUninitialized;
  class(): SMKWebServerController;
}

