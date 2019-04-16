interface MSColorPickerViewControllerUninitialized<InitializedType = MSColorPickerViewController> extends NSViewControllerUninitialized<MSColorPickerViewController> {
  initWithDelegate(delegate: any): InitializedType;
}
interface MSColorPickerViewController extends NSViewController, IMSKeyViewProvider {
  setColor_multipleValues(color: MSColor, multiple: boolean): void;
  setFrequentColors(frequentColors: NSArray<any> | any[]): void;
  sectionHeaderAccessoryViewControllers(): NSArray<any>;
  connectToColorPanel(): void;
  disconnectFromColorPanel(): void;

  color(): MSColor;
  setColor(color: MSColor): void;
}
declare const MSColorPickerViewController: {
  alloc(): MSColorPickerViewControllerUninitialized;
  class(): MSColorPickerViewController;
}

