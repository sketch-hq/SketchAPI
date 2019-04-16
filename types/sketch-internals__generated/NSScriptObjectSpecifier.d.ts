interface NSScriptObjectSpecifierUninitialized<InitializedType = NSScriptObjectSpecifier> extends NSObjectUninitialized<NSScriptObjectSpecifier> {
  initWithContainerSpecifier_key(container: NSScriptObjectSpecifier, property: NSString | string): InitializedType;
  initWithContainerClassDescription_containerSpecifier_key(classDesc: NSScriptClassDescription, container: NSScriptObjectSpecifier | null, property: NSString | string): InitializedType;
  initWithCoder(inCoder: NSCoder): InitializedType;
}
interface NSScriptObjectSpecifier extends NSObject, INSCoding {
  indicesOfObjectsByEvaluatingWithContainer_count(container: any, count: NSInteger): NSInteger;
  objectsByEvaluatingWithContainers(containers: any): any;

  childSpecifier(): NSScriptObjectSpecifier;
  setChildSpecifier(childSpecifier: NSScriptObjectSpecifier): void;
  containerSpecifier(): NSScriptObjectSpecifier;
  setContainerSpecifier(containerSpecifier: NSScriptObjectSpecifier): void;
  containerIsObjectBeingTested(): boolean;
  setContainerIsObjectBeingTested(containerIsObjectBeingTested: boolean): void;
  containerIsRangeContainerObject(): boolean;
  setContainerIsRangeContainerObject(containerIsRangeContainerObject: boolean): void;
  key(): NSString;
  setKey(key: NSString | string): void;
  containerClassDescription(): NSScriptClassDescription;
  setContainerClassDescription(containerClassDescription: NSScriptClassDescription): void;
  keyClassDescription(): NSScriptClassDescription;
  objectsByEvaluatingSpecifier(): any;
  evaluationErrorNumber(): NSInteger;
  setEvaluationErrorNumber(evaluationErrorNumber: NSInteger): void;
  evaluationErrorSpecifier(): NSScriptObjectSpecifier;
  descriptor(): NSAppleEventDescriptor;
}
declare const NSScriptObjectSpecifier: {
  alloc(): NSScriptObjectSpecifierUninitialized;
  class(): NSScriptObjectSpecifier;  objectSpecifierWithDescriptor(descriptor: NSAppleEventDescriptor): NSScriptObjectSpecifier;

}

