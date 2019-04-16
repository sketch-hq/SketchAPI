interface MOProtocolDescriptionUninitialized<InitializedType = MOProtocolDescription> extends NSObjectUninitialized<MOProtocolDescription> {}
interface MOProtocolDescription extends NSObject {
  addClassMethod_required(method: MOMethodDescription, isRequired: boolean): void;
  addInstanceMethod_required(method: MOMethodDescription, isRequired: boolean): void;
  addProperty_required(property: MOPropertyDescription, isRequired: boolean): void;
  addProtocol(protocol: MOProtocolDescription): void;

  name(): NSString;
  requiredClassMethods(): NSArray<any>;
  optionalClassMethods(): NSArray<any>;
  requiredInstanceMethods(): NSArray<any>;
  optionalInstanceMethods(): NSArray<any>;
  properties(): NSArray<any>;
  protocols(): NSArray<any>;
  protocol(): Protocol;
}
declare const MOProtocolDescription: {
  alloc(): MOProtocolDescriptionUninitialized;
  class(): MOProtocolDescription;  descriptionForProtocol(protocol: Protocol): MOProtocolDescription;
  descriptionForProtocolWithName(name: NSString | string): MOProtocolDescription;
  allocateDescriptionForProtocolWithName(name: NSString | string): MOProtocolDescription;

}

