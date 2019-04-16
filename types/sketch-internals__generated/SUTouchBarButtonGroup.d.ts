interface SUTouchBarButtonGroupUninitialized<InitializedType = SUTouchBarButtonGroup> extends NSViewControllerUninitialized<SUTouchBarButtonGroup> {
  initByReferencingButtons(buttons: NSArray<any> | any[]): InitializedType;
}

interface SUTouchBarButtonGroup extends NSViewController {

  buttons(): NSArray<any>;
}

declare const SUTouchBarButtonGroup: {
  alloc(): SUTouchBarButtonGroupUninitialized;
  class(): SUTouchBarButtonGroup;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

