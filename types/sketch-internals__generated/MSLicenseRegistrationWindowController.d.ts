interface MSLicenseRegistrationWindowControllerUninitialized<InitializedType = MSLicenseRegistrationWindowController> extends NSWindowControllerUninitialized<MSLicenseRegistrationWindowController> {}
interface MSLicenseRegistrationWindowController extends NSWindowController, INSWindowDelegate {
}
declare const MSLicenseRegistrationWindowController: {
  alloc(): MSLicenseRegistrationWindowControllerUninitialized;
  class(): MSLicenseRegistrationWindowController;  showTrialExpiredModal(): void;
  showRegistrationWindow(): void;
  registerWithKey(key: NSString | string): void;

}

