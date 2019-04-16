interface MOObjCRuntimeUninitialized<InitializedType = MOObjCRuntime> extends NSObjectUninitialized<MOObjCRuntime> {}
interface MOObjCRuntime extends NSObject {

  classes(): NSArray<any>;
  protocols(): NSArray<any>;
}
declare const MOObjCRuntime: {
  alloc(): MOObjCRuntimeUninitialized;
  class(): MOObjCRuntime;  sharedRuntime(): MOObjCRuntime;

}

