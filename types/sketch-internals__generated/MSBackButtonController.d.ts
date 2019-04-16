interface MSBackButtonControllerUninitialized<InitializedType = MSBackButtonController> extends NSViewControllerUninitialized<MSBackButtonController> {}

interface MSBackButtonController extends NSViewController {
  backButtonAction(sender: any): IBAction;
  attachToView(view: NSView): void;
  hide(): void;
  show(): void;

  doc(): MSDocument;
  setDoc(doc: MSDocument): void;
}

declare const MSBackButtonController: {
  alloc(): MSBackButtonControllerUninitialized;
  class(): MSBackButtonController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

