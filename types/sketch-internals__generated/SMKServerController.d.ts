interface SMKServerControllerUninitialized<InitializedType = SMKServerController> extends NSObjectUninitialized<SMKServerController> {}
interface SMKServerController extends NSObject {

  connections(): NSArray<any>;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const SMKServerController: {
  alloc(): SMKServerControllerUninitialized;
  class(): SMKServerController;
}

