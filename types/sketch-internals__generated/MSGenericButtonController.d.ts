interface MSGenericButtonControllerUninitialized<InitializedType = MSGenericButtonController> extends NSViewControllerUninitialized<MSGenericButtonController> {
  initWithNibName_target_action(nibName: NSNibName, target: any | null, action: string): InitializedType;
}
interface MSGenericButtonController extends NSViewController {

  button(): NSButton;
}
declare const MSGenericButtonController: {
  alloc(): MSGenericButtonControllerUninitialized;
  class(): MSGenericButtonController;  buttonWithNibName_target_action(nibName: NSNibName, target: any | null, action: string): MSGenericButtonController;

}

