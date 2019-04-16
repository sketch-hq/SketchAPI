interface NSAppearanceUninitialized<InitializedType = NSAppearance> extends NSObjectUninitialized<NSAppearance> {
  initWithAppearanceNamed_bundle(name: NSAppearanceName, bundle: NSBundle | null): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}
interface NSAppearance extends NSObject, INSSecureCoding {
  bestMatchFromAppearancesWithNames(appearances: NSArray<any> | any[]): NSAppearanceName;

  name(): NSAppearanceName;
  allowsVibrancy(): boolean;
  isDark_bc(): boolean;
}
declare const NSAppearance: {
  alloc(): NSAppearanceUninitialized;
  class(): NSAppearance;  appearanceNamed(name: NSAppearanceName): NSAppearance;
  sketchDefaultDarkAppearance(): NSAppearance;

  currentAppearance(): NSAppearance;
  setCurrentAppearance(currentAppearance: NSAppearance): void;

}

