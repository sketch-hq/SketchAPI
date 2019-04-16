interface SUOperatingSystemUninitialized<InitializedType = SUOperatingSystem> extends NSObjectUninitialized<SUOperatingSystem> {}
interface SUOperatingSystem extends NSObject {
}
declare const SUOperatingSystem: {
  alloc(): SUOperatingSystemUninitialized;
  class(): SUOperatingSystem;  operatingSystemVersion(): NSOperatingSystemVersion;
  isOperatingSystemAtLeastVersion(version: NSOperatingSystemVersion): boolean;
  systemVersionString(): NSString;

}

