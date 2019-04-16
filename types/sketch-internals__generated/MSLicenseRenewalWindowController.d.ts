interface MSLicenseRenewalWindowControllerUninitialized<InitializedType = MSLicenseRenewalWindowController> extends NSWindowControllerUninitialized<MSLicenseRenewalWindowController> {}
interface MSLicenseRenewalWindowController extends NSWindowController, INSWindowDelegate {
}
declare const MSLicenseRenewalWindowController: {
  alloc(): MSLicenseRenewalWindowControllerUninitialized;
  class(): MSLicenseRenewalWindowController;  showLicenseUpdateWindow(): void;

}

