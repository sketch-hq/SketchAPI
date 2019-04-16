interface MSColorComponentsControllerUninitialized<InitializedType = MSColorComponentsController> extends NSViewControllerUninitialized<MSColorComponentsController> {}

interface MSColorComponentsController extends NSViewController, IMSKeyViewProvider {
  setColor_multipleValues(color: MSFlexibleColor, multiple: boolean): void;

  color(): MSFlexibleColor;
  colorModel(): MSComponentColorModel;
  setColorModel(colorModel: MSComponentColorModel): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  firstKeyView(): NSView;
  lastKeyView(): NSView;
  preferredFirstResponder(): NSView;
}

declare const MSColorComponentsController: {
  alloc(): MSColorComponentsControllerUninitialized;
  class(): MSColorComponentsController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

