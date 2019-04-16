interface MSManageTextStyleViewUninitialized<InitializedType = MSManageTextStyleView> extends MSManageSharedObjectBaseViewControllerUninitialized<MSManageTextStyleView> {}

interface MSManageTextStyleView extends MSManageSharedObjectBaseViewController {
}

declare const MSManageTextStyleView: {
  alloc(): MSManageTextStyleViewUninitialized;
  class(): MSManageTextStyleView;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

