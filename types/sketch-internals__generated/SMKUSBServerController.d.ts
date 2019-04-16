interface SMKUSBServerControllerUninitialized<InitializedType = SMKUSBServerController> extends SMKServerControllerUninitialized<SMKUSBServerController> {}

interface SMKUSBServerController extends SMKServerController {
}

declare const SMKUSBServerController: {
  alloc(): SMKUSBServerControllerUninitialized;
  class(): SMKUSBServerController;
  accessInstanceVariablesDirectly(): boolean;

}

