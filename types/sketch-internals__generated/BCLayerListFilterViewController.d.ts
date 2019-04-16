interface BCLayerListFilterViewControllerUninitialized<InitializedType = BCLayerListFilterViewController> extends NSViewControllerUninitialized<BCLayerListFilterViewController> {}

interface BCLayerListFilterViewController extends NSViewController {
  applyAppearance(): void;
  showFilterMenu(sender: any): IBAction;
  toggleFilter(sender: any): IBAction;
  findLayer(sender: any): IBAction;

  filter(): BCFilterInfo;
}

declare const BCLayerListFilterViewController: {
  alloc(): BCLayerListFilterViewControllerUninitialized;
  class(): BCLayerListFilterViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

