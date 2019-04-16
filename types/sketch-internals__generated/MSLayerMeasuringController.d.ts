interface MSLayerMeasuringControllerUninitialized<InitializedType = MSLayerMeasuringController> extends NSObjectUninitialized<MSLayerMeasuringController> {}
interface MSLayerMeasuringController extends NSObject {

  renderer(): MSSpecRenderer;
  viewModel(): MSLayerMeasurementViewModel;
  numberFormatter(): NSNumberFormatter;
  setNumberFormatter(numberFormatter: NSNumberFormatter): void;
}
declare const MSLayerMeasuringController: {
  alloc(): MSLayerMeasuringControllerUninitialized;
  class(): MSLayerMeasuringController;
}

