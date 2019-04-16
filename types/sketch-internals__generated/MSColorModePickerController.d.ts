interface MSColorModePickerControllerUninitialized<InitializedType = MSColorModePickerController> extends NSViewControllerUninitialized<MSColorModePickerController> {}
interface MSColorModePickerController extends NSViewController {
  setFillType_gradientType(fillType: BCFillType, gradientType: MSGradientType): void;
  switchToColorTabAtIndex(index: NSUInteger): IBAction;
  colorTabIndex(): NSUInteger;

  delegate(): any;
  setDelegate(delegate: any): void;
  styleParts(): NSArray<any>;
  setStyleParts(styleParts: NSArray<any> | any[]): void;
}
declare const MSColorModePickerController: {
  alloc(): MSColorModePickerControllerUninitialized;
  class(): MSColorModePickerController;
}

