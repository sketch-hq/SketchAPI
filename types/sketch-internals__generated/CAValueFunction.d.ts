interface CAValueFunctionUninitialized<InitializedType = CAValueFunction> extends NSObjectUninitialized<CAValueFunction> {}
interface CAValueFunction extends NSObject, INSSecureCoding {

  name(): CAValueFunctionName;
}
declare const CAValueFunction: {
  alloc(): CAValueFunctionUninitialized;
  class(): CAValueFunction;  functionWithName(name: CAValueFunctionName): CAValueFunction;

}

