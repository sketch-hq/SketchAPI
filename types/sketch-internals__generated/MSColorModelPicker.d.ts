interface MSColorModelPickerUninitialized<InitializedType = MSColorModelPicker> extends NSViewControllerUninitialized<MSColorModelPicker> {}

interface MSColorModelPicker extends NSViewController {

  colorModel(): MSComponentColorModel;
  setColorModel(colorModel: MSComponentColorModel): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSColorModelPicker: {
  alloc(): MSColorModelPickerUninitialized;
  class(): MSColorModelPicker;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

