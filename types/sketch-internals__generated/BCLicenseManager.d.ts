interface BCLicenseManagerUninitialized<InitializedType = BCLicenseManager> extends NSObjectUninitialized<BCLicenseManager> {}
interface BCLicenseManager extends NSObject {
  canRenewLicense(): boolean;

  canUseCloud(): boolean;
}
declare const BCLicenseManager: {
  alloc(): BCLicenseManagerUninitialized;
  class(): BCLicenseManager;  enableCloud(): void;

  cloudEnabled(): boolean;

}

