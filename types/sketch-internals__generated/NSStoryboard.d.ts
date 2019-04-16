interface NSStoryboardUninitialized<InitializedType = NSStoryboard> extends NSObjectUninitialized<NSStoryboard> {}
interface NSStoryboard extends NSObject {
  instantiateInitialController(): any;
  instantiateControllerWithIdentifier(identifier: NSStoryboardSceneIdentifier): any;
}
declare const NSStoryboard: {
  alloc(): NSStoryboardUninitialized;
  class(): NSStoryboard;  storyboardWithName_bundle(name: NSStoryboardName, storyboardBundleOrNil: NSBundle | null): NSStoryboard;

  mainStoryboard(): NSStoryboard;

}

