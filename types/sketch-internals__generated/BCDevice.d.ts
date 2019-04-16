interface BCDeviceUninitialized<InitializedType = BCDevice> extends NSObjectUninitialized<BCDevice> {}
interface BCDevice extends NSObject {
}
declare const BCDevice: {
  alloc(): BCDeviceUninitialized;
  class(): BCDevice;
}

