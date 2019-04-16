interface UIDeviceUninitialized<InitializedType = UIDevice> {}
interface UIDevice {
  awk_totalMemory(): NSNumber;
}
declare const UIDevice: {
  alloc(): UIDeviceUninitialized;
  class(): UIDevice;
}

