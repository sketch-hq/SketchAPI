interface MSFlashControllerUninitialized<InitializedType = MSFlashController> extends NSObjectUninitialized<MSFlashController> {}
interface MSFlashController extends NSObject {
  displayFlashMessage(message: NSString | string): any;
  displayWarningMessage_withHelpHandler(message: NSString | string, helpBlock: MSFlashControllerHelpBlock | null): any;
  displayFixedMessage_withHelpHandler(message: NSString | string, helpBlock: MSFlashControllerHelpBlock | null): any;
  removeMessage(message: any): void;
  clearFlash(): void;

  stackView(): NSStackView;
  setStackView(stackView: NSStackView): void;
}
declare const MSFlashController: {
  alloc(): MSFlashControllerUninitialized;
  class(): MSFlashController;
}

