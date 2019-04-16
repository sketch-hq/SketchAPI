interface IBCOutlineViewDataControllerDataSource {
  dataController_childrenOfNode(dataController: BCOutlineViewDataController | null, node: any | null): NSArray<any>;
  rootObject(): any;
}

