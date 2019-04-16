interface BCPageListViewControllerUninitialized<InitializedType = BCPageListViewController> extends BCOutlineViewControllerUninitialized<BCPageListViewController> {}

interface BCPageListViewController extends BCOutlineViewController {
}

declare const BCPageListViewController: {
  alloc(): BCPageListViewControllerUninitialized;
  class(): BCPageListViewController;
  itemRowCanFloat(item: any): boolean;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

