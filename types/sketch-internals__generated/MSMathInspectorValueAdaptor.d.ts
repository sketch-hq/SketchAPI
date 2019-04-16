interface MSMathInspectorValueAdaptorUninitialized<InitializedType =  MSMathInspectorValueAdaptor> extends MSInspectorValueAdaptorUninitialized<MSMathInspectorValueAdaptor> {
  initWithModelsController_floatValueGetter_floatValueSetter_modelKeyPathsToWatch(modelsController: NSArrayController, floatValueGetter: Block, floatValueSetter: Block, modelKeyPathsToWatch: NSArray<any>): InitializedType;
}
interface MSMathInspectorValueAdaptor extends MSInspectorValueAdaptor {
  checkAndAdjustValues_contexts_withNumberFormatter_error(values: NSArray<any>, contexts: NSPointerArray, numberFormatter: NSNumberFormatter, error: NSError): NSArray<any>;
  effectiveNumberFormatter(): NSNumberFormatter;
  currentAdjustOptions(): MSValueAdaptorAdjustOptions;
  valueFromPrefixStrippedString_forModel_originalString_error(string: NSString, model: any, originalString: NSString, error: NSError): NSNumber;
  errorWithUnparsableString(unparsable: NSString): NSError;
  trimValueString_getMathPrefix(string: NSString, prefix: NSString): NSString;
  forceRelativeMathForBlock(block: Block): void;
  clampsValues(): boolean;
  setClampsValues(clampsValues: boolean): void;
  adjustIndividually(): boolean;
  setAdjustIndividually(adjustIndividually: boolean): void;
  numberFormatter(): NSNumberFormatter;
  setNumberFormatter(numberFormatter: NSNumberFormatter): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  isIncrementing(): boolean;
  setIsIncrementing(isIncrementing: boolean): void;
}
declare const MSMathInspectorValueAdaptor: {
  alloc(): MSMathInspectorValueAdaptorUninitialized;
}

