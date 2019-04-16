interface MSPluginDebugControllerUninitialized<InitializedType = MSPluginDebugController> extends NSObjectUninitialized<MSPluginDebugController> {}
interface MSPluginDebugController extends NSObject, ICODebugController {
}
declare const MSPluginDebugController: {
  alloc(): MSPluginDebugControllerUninitialized;
  class(): MSPluginDebugController;
}

