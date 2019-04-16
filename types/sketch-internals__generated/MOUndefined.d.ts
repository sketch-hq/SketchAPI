interface MOUndefinedUninitialized<InitializedType = MOUndefined> extends NSObjectUninitialized<MOUndefined> {}
interface MOUndefined extends NSObject {
}
declare const MOUndefined: {
  alloc(): MOUndefinedUninitialized;
  class(): MOUndefined;  undefined(): MOUndefined;

}

