interface MSOverrideManagementAllowOverridesViewControllerUninitialized<InitializedType = MSOverrideManagementAllowOverridesViewController> extends MSOverrideManagementViewControllerUninitialized<MSOverrideManagementAllowOverridesViewController> {}

interface MSOverrideManagementAllowOverridesViewController extends MSOverrideManagementViewController {
}

declare const MSOverrideManagementAllowOverridesViewController: {
  alloc(): MSOverrideManagementAllowOverridesViewControllerUninitialized;
  class(): MSOverrideManagementAllowOverridesViewController;
  rowHeight(): CGFloat;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

