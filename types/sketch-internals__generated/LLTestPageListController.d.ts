interface LLTestPageListControllerUninitialized<InitializedType = LLTestPageListController> extends LLTestBaseControllerUninitialized<LLTestPageListController> {}
interface LLTestPageListController extends LLTestBaseController {
  addPage(): void;
}
declare const LLTestPageListController: {
  alloc(): LLTestPageListControllerUninitialized;
  class(): LLTestPageListController;
}

