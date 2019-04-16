interface MSFrequentColorsControllerUninitialized<InitializedType = MSFrequentColorsController> extends MSFrequentObjectsControllerUninitialized<MSFrequentColorsController> {}

interface MSFrequentColorsController extends MSFrequentObjectsController {

  color(): MSColor;
  setColor(color: MSColor): void;
  colorModel(): MSComponentColorModel;
  setColorModel(colorModel: MSComponentColorModel): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSFrequentColorsController: {
  alloc(): MSFrequentColorsControllerUninitialized;
  class(): MSFrequentColorsController;
  menuItemForColorCounter_target_action_documentColorSpace_colorModel(colorCounter: MSColorCounter, target: any, action: string, colorSpace: NSColorSpace, colorModel: MSComponentColorModel): NSMenuItem;
  menuItemAttributedTitleForTitle_description(title: NSString | string, description: NSString | string): NSAttributedString;
}

