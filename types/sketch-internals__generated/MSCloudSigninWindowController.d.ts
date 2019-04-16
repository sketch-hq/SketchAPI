interface MSCloudSigninWindowControllerUninitialized<InitializedType = MSCloudSigninWindowController> extends NSWindowControllerUninitialized<MSCloudSigninWindowController> {}
interface MSCloudSigninWindowController extends NSWindowController {

  environment(): SCKAPIEnvironment;
  setEnvironment(environment: SCKAPIEnvironment): void;
  isLoading(): boolean;
  email(): NSString;
  setEmail(email: NSString | string): void;
  password(): NSString;
  setPassword(password: NSString | string): void;
}
declare const MSCloudSigninWindowController: {
  alloc(): MSCloudSigninWindowControllerUninitialized;
  class(): MSCloudSigninWindowController;
}

