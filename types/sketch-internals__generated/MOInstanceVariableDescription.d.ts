interface MOInstanceVariableDescriptionUninitialized<InitializedType = MOInstanceVariableDescription> extends NSObjectUninitialized<MOInstanceVariableDescription> {
  initWithName_typeEncoding(name: NSString | string, typeEncoding: NSString | string): InitializedType;
}
interface MOInstanceVariableDescription extends NSObject {

  name(): NSString;
  setName(name: NSString | string): void;
  typeEncoding(): NSString;
  setTypeEncoding(typeEncoding: NSString | string): void;
}
declare const MOInstanceVariableDescription: {
  alloc(): MOInstanceVariableDescriptionUninitialized;
  class(): MOInstanceVariableDescription;  instanceVariableWithName_typeEncoding(name: NSString | string, typeEncoding: NSString | string): MOInstanceVariableDescription;

}

