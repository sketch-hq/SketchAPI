interface MSReplacementFontPickerViewControllerUninitialized<InitializedType = MSReplacementFontPickerViewController> extends MSFontFamilyPickerViewControllerUninitialized<MSReplacementFontPickerViewController> {}

interface MSReplacementFontPickerViewController extends MSFontFamilyPickerViewController {
}

declare const MSReplacementFontPickerViewController: {
  alloc(): MSReplacementFontPickerViewControllerUninitialized;
  class(): MSReplacementFontPickerViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

