interface MSFillAndBorderColorScreenPickerUninitialized<InitializedType = MSFillAndBorderColorScreenPicker> extends NSObjectUninitialized<MSFillAndBorderColorScreenPicker> {}
interface MSFillAndBorderColorScreenPicker extends NSObject {
}
declare const MSFillAndBorderColorScreenPicker: {
  alloc(): MSFillAndBorderColorScreenPickerUninitialized;
  class(): MSFillAndBorderColorScreenPicker;  pickColorForLayers_colorSpace_completionBlock(layers: NSArray<any> | any[], colorspace: NSColorSpace, completionBlock: BCVoidBlock): void;
  applyColor_toLayers(chosenColor: MSColor, layers: NSArray<any> | any[]): void;
  setPreferredStylePartName(name: NSString | string): void;

}

