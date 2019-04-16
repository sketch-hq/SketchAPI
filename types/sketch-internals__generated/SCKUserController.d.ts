interface SCKUserControllerUninitialized<InitializedType = SCKUserController> {}

interface SCKUserController {
}

declare const SCKUserController: {
  alloc(): SCKUserControllerUninitialized;
  class(): SCKUserController;
}

