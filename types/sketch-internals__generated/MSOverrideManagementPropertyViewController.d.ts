interface MSOverrideManagementPropertyViewControllerUninitialized<InitializedType = MSOverrideManagementPropertyViewController> extends MSOverrideManagementViewControllerUninitialized<MSOverrideManagementPropertyViewController> {}

interface MSOverrideManagementPropertyViewController extends MSOverrideManagementViewController {
}

declare const MSOverrideManagementPropertyViewController: {
  alloc(): MSOverrideManagementPropertyViewControllerUninitialized;
  class(): MSOverrideManagementPropertyViewController;
  rowHeight(): CGFloat;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

