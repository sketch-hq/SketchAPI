interface NSPressureConfigurationUninitialized<InitializedType = NSPressureConfiguration> extends NSObjectUninitialized<NSPressureConfiguration> {
  initWithPressureBehavior(pressureBehavior: NSPressureBehavior): InitializedType;
}
interface NSPressureConfiguration extends NSObject {
  set(): void;

  pressureBehavior(): NSPressureBehavior;
}
declare const NSPressureConfiguration: {
  alloc(): NSPressureConfigurationUninitialized;
  class(): NSPressureConfiguration;
}

