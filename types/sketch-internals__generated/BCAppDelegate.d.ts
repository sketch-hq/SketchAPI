interface BCAppDelegateUninitialized<InitializedType = BCAppDelegate> extends NSObjectUninitialized<BCAppDelegate> {}
interface BCAppDelegate extends NSObject, INSApplicationDelegate, IBCPopoverDelegate, INSApplicationDelegate {
  attach(sender: any): IBAction;
  resize(sender: any): IBAction;

  window(): NSWindow;
  setWindow(window: NSWindow): void;
  button(): NSButton;
  setButton(button: NSButton): void;
}
declare const BCAppDelegate: {
  alloc(): BCAppDelegateUninitialized;
  class(): BCAppDelegate;
}

