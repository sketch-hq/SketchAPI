interface MSToolControllerUninitialized<InitializedType = MSToolController> extends NSObjectUninitialized<MSToolController> {}
interface MSToolController extends NSObject {

  state(): MSToolControllerState;
  setState(state: MSToolControllerState): void;
}
declare const MSToolController: {
  alloc(): MSToolControllerUninitialized;
  class(): MSToolController;
}

