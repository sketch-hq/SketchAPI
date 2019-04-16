interface NSUserDefaultsControllerUninitialized<InitializedType = NSUserDefaultsController> extends NSControllerUninitialized<NSUserDefaultsController> {
  initWithDefaults_initialValues(defaults: NSUserDefaults | null, initialValues: NSDictionary<any, any> | {[key: string]: any} | null): InitializedType;
}
interface NSUserDefaultsController extends NSController {
  revert(sender: any | null): IBAction;
  save(sender: any | null): IBAction;
  revertToInitialValues(sender: any | null): IBAction;

  defaults(): NSUserDefaults;
  initialValues(): NSDictionary<any, any>;
  setInitialValues(initialValues: NSDictionary<any, any> | {[key: string]: any}): void;
  appliesImmediately(): boolean;
  setAppliesImmediately(appliesImmediately: boolean): void;
  hasUnappliedChanges(): boolean;
  values(): any;
}
declare const NSUserDefaultsController: {
  alloc(): NSUserDefaultsControllerUninitialized;
  class(): NSUserDefaultsController;
  sharedUserDefaultsController(): NSUserDefaultsController;

}

