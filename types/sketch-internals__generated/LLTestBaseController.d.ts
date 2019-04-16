interface LLTestBaseControllerUninitialized<InitializedType = LLTestBaseController> extends NSObjectUninitialized<LLTestBaseController> {}
interface LLTestBaseController extends NSObject, IBCOutlineViewDataControllerDataSource, IBCOutlineViewDataControllerDelegate {
  dataController_removeNodes(dataController: BCOutlineViewDataController, nodes: NSArray<any> | any[]): void;

  root(): any;
  setRoot(root: any): void;
}
declare const LLTestBaseController: {
  alloc(): LLTestBaseControllerUninitialized;
  class(): LLTestBaseController;
}

