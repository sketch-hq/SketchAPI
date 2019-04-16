interface MSFlattenActionValidatorUninitialized<InitializedType = MSFlattenActionValidator> extends NSObjectUninitialized<MSFlattenActionValidator> {}
interface MSFlattenActionValidator extends NSObject {
}
declare const MSFlattenActionValidator: {
  alloc(): MSFlattenActionValidatorUninitialized;
  class(): MSFlattenActionValidator;  isValidForSelectedLayers(selectedLayers: MSLayerArray): boolean;
  hasFlattenablePathInSelection(selectedLayers: MSLayerArray): boolean;

}

