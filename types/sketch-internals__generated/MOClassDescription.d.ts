interface MOClassDescriptionUninitialized<InitializedType = MOClassDescription> extends NSObjectUninitialized<MOClassDescription> {}
interface MOClassDescription extends NSObject {
  registerClass(): any;
  addInstanceVariableWithName_typeEncoding(name: NSString | string, typeEncoding: NSString | string): boolean;
  addClassMethodWithSelector_typeEncoding_block(selector: string, typeEncoding: NSString | string, block: any): boolean;
  addClassMethodWithSelector_function(selector: string, functionName: MOJavaScriptObject | Function): boolean;
  addInstanceMethodWithSelector_typeEncoding_block(selector: string, typeEncoding: NSString | string, block: any): boolean;
  addInstanceMethodWithSelector_function(selector: string, functionName: MOJavaScriptObject | Function): boolean;
  addProperty(property: MOPropertyDescription): boolean;
  addProtocol(protocol: MOProtocolDescription): void;

  name(): NSString;
  descriptedClass(): any;
  superclass(): MOClassDescription;
  ancestors(): NSArray<any>;
  instanceVariables(): NSArray<any>;
  instanceVariablesWithAncestors(): NSArray<any>;
  classMethods(): NSArray<any>;
  classMethodsWithAncestors(): NSArray<any>;
  instanceMethods(): NSArray<any>;
  instanceMethodsWithAncestors(): NSArray<any>;
  properties(): NSArray<any>;
  propertiesWithAncestors(): NSArray<any>;
  protocols(): NSArray<any>;
  protocolsWithAncestors(): NSArray<any>;
}
declare const MOClassDescription: {
  alloc(): MOClassDescriptionUninitialized;
  class(): MOClassDescription;  descriptionForClassWithName(name: NSString | string): MOClassDescription;
  descriptionForClass(aClass: any): MOClassDescription;
  allocateDescriptionForClassWithName_superclass(name: NSString | string, superclass: any): MOClassDescription;

}

