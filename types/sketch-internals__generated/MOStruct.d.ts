interface MOStructUninitialized<InitializedType = MOStruct> extends NSObjectUninitialized<MOStruct> {
  initWithName_memberNames_runtime(name: NSString | string, memberNames: NSArray<any> | any[], runtime: Mocha): InitializedType;
}
interface MOStruct extends NSObject {
  objectForMemberName(name: NSString | string): any;
  setObject_forMemberName(obj: any, name: NSString | string): void;

  name(): NSString;
  memberNames(): NSArray<any>;
}
declare const MOStruct: {
  alloc(): MOStructUninitialized;
  class(): MOStruct;  structureWithName_memberNames_runtime(name: NSString | string, memberNames: NSArray<any> | any[], runtime: Mocha): MOStruct;

}

