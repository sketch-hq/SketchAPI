interface MSCornerRadiusInspectorValueAdaptorContextUninitialized<InitializedType = MSCornerRadiusInspectorValueAdaptorContext> extends NSObjectUninitialized<MSCornerRadiusInspectorValueAdaptorContext> {}
interface MSCornerRadiusInspectorValueAdaptorContext extends NSObject {
  componentStringWithMathValueForModel(model: MSRectangleShape): NSString;

  mode(): MSCornerRadiusMode;
  setMode(mode: MSCornerRadiusMode): void;
  componentString(): NSString;
  setComponentString(componentString: NSString | string): void;
  mathOperator(): NSString;
  setMathOperator(mathOperator: NSString | string): void;
  value(): NSNumber;
  setValue(value: NSNumber | number): void;
}
declare const MSCornerRadiusInspectorValueAdaptorContext: {
  alloc(): MSCornerRadiusInspectorValueAdaptorContextUninitialized;
  class(): MSCornerRadiusInspectorValueAdaptorContext;
}

