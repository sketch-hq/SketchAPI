interface NSNullUninitialized<InitializedType = NSNull> extends NSObjectUninitialized<NSNull> {}
interface NSNull extends NSObject, INSCopying, INSSecureCoding {
}
declare const NSNull: {
  alloc(): NSNullUninitialized;
  class(): NSNull;  null(): NSNull;

}

