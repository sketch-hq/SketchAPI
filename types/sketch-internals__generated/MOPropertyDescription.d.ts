interface MOPropertyDescriptionUninitialized<InitializedType = MOPropertyDescription> extends NSObjectUninitialized<MOPropertyDescription> {}
interface MOPropertyDescription extends NSObject {

  name(): NSString;
  setName(name: NSString | string): void;
  typeEncoding(): NSString;
  setTypeEncoding(typeEncoding: NSString | string): void;
  ivarName(): NSString;
  setIvarName(ivarName: NSString | string): void;
  getterSelector(): string;
  setGetterSelector(getterSelector: string): void;
  setterSelector(): string;
  setSetterSelector(setterSelector: string): void;
  ownershipRule(): MOObjCOwnershipRule;
  setOwnershipRule(ownershipRule: MOObjCOwnershipRule): void;
  dynamic(): boolean;
  setDynamic(dynamic: boolean): void;
  nonAtomic(): boolean;
  setNonAtomic(nonAtomic: boolean): void;
  readOnly(): boolean;
  setReadOnly(readOnly: boolean): void;
  weak(): boolean;
  setWeak(weak: boolean): void;
}
declare const MOPropertyDescription: {
  alloc(): MOPropertyDescriptionUninitialized;
  class(): MOPropertyDescription;
}

