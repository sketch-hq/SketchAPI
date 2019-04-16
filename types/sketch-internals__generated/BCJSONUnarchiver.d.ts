interface BCJSONUnarchiverUninitialized<InitializedType = BCJSONUnarchiver> extends NSObjectUninitialized<BCJSONUnarchiver> {}
interface BCJSONUnarchiver extends NSObject {
}
declare const BCJSONUnarchiver: {
  alloc(): BCJSONUnarchiverUninitialized;
  class(): BCJSONUnarchiver;
}

