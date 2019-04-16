interface LLTestLayerListControllerUninitialized<InitializedType = LLTestLayerListController> extends LLTestBaseControllerUninitialized<LLTestLayerListController> {}
interface LLTestLayerListController extends LLTestBaseController {
}
declare const LLTestLayerListController: {
  alloc(): LLTestLayerListControllerUninitialized;
  class(): LLTestLayerListController;
}

