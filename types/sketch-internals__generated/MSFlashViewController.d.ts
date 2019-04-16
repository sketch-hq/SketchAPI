interface MSFlashViewControllerUninitialized<InitializedType = MSFlashViewController> extends NSViewControllerUninitialized<MSFlashViewController> {}

interface MSFlashViewController extends NSViewController {
}

declare const MSFlashViewController: {
  alloc(): MSFlashViewControllerUninitialized;
  class(): MSFlashViewController;
  flashViewControllerWithMessage_closeBlock_helpBlock(message: NSString | string, closeBlock: MSFlashViewControllerBlock | null, helpBlock: MSFlashViewControllerBlock | null): MSFlashViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

