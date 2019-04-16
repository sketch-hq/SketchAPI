interface MSModelObjectCommonUninitialized<InitializedType = MSModelObjectCommon> extends NSObjectUninitialized<MSModelObjectCommon> {
  initializeUnsetObjectPropertiesWithDefaults(): InitializedType;
  init(): InitializedType;
  initWithBlock(block: Block): InitializedType;
  initWithMinimalSetup(): InitializedType;
}
interface MSModelObjectCommon extends NSObject, IMSModelObjectCommon {
  isContainedByInstanceOfForeignSymbol(ancestors: NSArray<any> | any[]): boolean;
  treeStructure(): NSString;
  simpleTreeStructure(): NSString;
  treeAsDictionary(): any;
  performInitEmptyObject(): void;
  objectDidInit(): void;
  enumerateProperties(enumerator: MSDataPropertyEnumerator): void;
  hasObjectID(): boolean;
  primitiveObjectID(): NSString;
  recursivelyGenerateObjectID(): any;
  enumerateChildProperties(enumerator: MSDataPropertyEnumerator): void;
  enumerateDescendants(enumerator: MSDescendantEnumerator): void;

  objectID(): NSString;
  setObjectID(objectID: NSString | string): void;
}
declare const MSModelObjectCommon: {
  alloc(): MSModelObjectCommonUninitialized;
  class(): MSModelObjectCommon;  generateObjectID(): any;
  defaultName(): NSString;

}

