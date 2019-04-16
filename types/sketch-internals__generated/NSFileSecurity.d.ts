interface NSFileSecurityUninitialized<InitializedType = NSFileSecurity> extends NSObjectUninitialized<NSFileSecurity> {
  initWithCoder(aDecoder: NSCoder): InitializedType;
}
interface NSFileSecurity extends NSObject, INSCopying, INSSecureCoding {
}
declare const NSFileSecurity: {
  alloc(): NSFileSecurityUninitialized;
  class(): NSFileSecurity;
}

