interface MSOverrideManagementTitleViewControllerUninitialized<InitializedType = MSOverrideManagementTitleViewController> extends MSOverrideManagementViewControllerUninitialized<MSOverrideManagementTitleViewController> {}

interface MSOverrideManagementTitleViewController extends MSOverrideManagementViewController {
}

declare const MSOverrideManagementTitleViewController: {
  alloc(): MSOverrideManagementTitleViewControllerUninitialized;
  class(): MSOverrideManagementTitleViewController;
  rowHeight(): CGFloat;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

