interface SUStatusControllerUninitialized<InitializedType = SUStatusController> extends NSWindowControllerUninitialized<SUStatusController> {
  initWithHost(host: SUHost): InitializedType;
}
interface SUStatusController extends NSWindowController {
  beginActionWithTitle_maxProgressValue_statusText(title: NSString | string, maxProgressValue: number, statusText: NSString | string): void;
  setButtonTitle_target_action_isDefault(buttonTitle: NSString | string, target: any, action: string, isDefault: boolean): void;

  actionButton(): NSButton;
  setActionButton(actionButton: NSButton): void;
  progressBar(): NSProgressIndicator;
  setProgressBar(progressBar: NSProgressIndicator): void;
  statusTextField(): NSTextField;
  setStatusTextField(statusTextField: NSTextField): void;
  statusText(): NSString;
  setStatusText(statusText: NSString | string): void;
  progressValue(): number;
  setProgressValue(progressValue: number): void;
  maxProgressValue(): number;
  setMaxProgressValue(maxProgressValue: number): void;
  buttonEnabled(): boolean;
  setButtonEnabled(buttonEnabled: boolean): void;
}
declare const SUStatusController: {
  alloc(): SUStatusControllerUninitialized;
  class(): SUStatusController;
}

