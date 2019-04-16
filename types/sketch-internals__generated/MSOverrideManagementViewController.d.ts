interface MSOverrideManagementViewControllerUninitialized<InitializedType = MSOverrideManagementViewController> extends NSViewControllerUninitialized<MSOverrideManagementViewController> {}

interface MSOverrideManagementViewController extends NSViewController {

  managementItem(): MSOverrideManagementItem;
  setManagementItem(managementItem: MSOverrideManagementItem): void;
}

declare const MSOverrideManagementViewController: {
  alloc(): MSOverrideManagementViewControllerUninitialized;
  class(): MSOverrideManagementViewController;
  rowHeight(): CGFloat;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

