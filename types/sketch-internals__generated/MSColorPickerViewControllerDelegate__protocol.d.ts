interface IMSColorPickerViewControllerDelegate {
  colorPickerController_colorDidChange(controller: MSColorPickerViewController, color: MSColor): void;
  subviewsChangedInColorPickerController(controller: MSColorPickerViewController): void;
}

