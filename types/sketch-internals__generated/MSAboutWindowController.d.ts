interface MSAboutWindowControllerUninitialized<InitializedType = MSAboutWindowController> extends NSWindowControllerUninitialized<MSAboutWindowController> {}

interface MSAboutWindowController extends NSWindowController {
  showAboutUsPage(sender: any): IBAction;
  showAcknowledgementsPage(sender: any): IBAction;
  showPurchaseLicensePage(sender: any): IBAction;
  showRenewLicensePage(sender: any): IBAction;
  unlinkDevice(sender: any): IBAction;

  backgroundImageView(): MSThemeImageView;
  setBackgroundImageView(backgroundImageView: MSThemeImageView): void;
  buildNumberTextField(): NSTextField;
  setBuildNumberTextField(buildNumberTextField: NSTextField): void;
  copyrightTextField(): NSTextField;
  setCopyrightTextField(copyrightTextField: NSTextField): void;
  expirationTitleTextField(): NSTextField;
  setExpirationTitleTextField(expirationTitleTextField: NSTextField): void;
  expirationDateTextField(): NSTextField;
  setExpirationDateTextField(expirationDateTextField: NSTextField): void;
  purchaseLicenseButton(): NSButton;
  setPurchaseLicenseButton(purchaseLicenseButton: NSButton): void;
  registeredToTextField(): NSTextField;
  setRegisteredToTextField(registeredToTextField: NSTextField): void;
  renewLicenseButton(): NSButton;
  setRenewLicenseButton(renewLicenseButton: NSButton): void;
  trialNoteTextField(): NSTextField;
  setTrialNoteTextField(trialNoteTextField: NSTextField): void;
  unlinkDeviceButton(): NSButton;
  setUnlinkDeviceButton(unlinkDeviceButton: NSButton): void;
  variantNameTextField(): NSTextField;
  setVariantNameTextField(variantNameTextField: NSTextField): void;
  versionTextField(): NSTextField;
  setVersionTextField(versionTextField: NSTextField): void;
}

declare const MSAboutWindowController: {
  alloc(): MSAboutWindowControllerUninitialized;
  class(): MSAboutWindowController;
  showAboutWindow(): void;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

