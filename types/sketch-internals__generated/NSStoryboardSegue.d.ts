interface NSStoryboardSegueUninitialized<InitializedType = NSStoryboardSegue> extends NSObjectUninitialized<NSStoryboardSegue> {
  initWithIdentifier_source_destination(identifier: NSStoryboardSegueIdentifier, sourceController: any, destinationController: any): InitializedType;
}
interface NSStoryboardSegue extends NSObject {
  perform(): void;

  identifier(): NSStoryboardSegueIdentifier;
  sourceController(): any;
  destinationController(): any;
}
declare const NSStoryboardSegue: {
  alloc(): NSStoryboardSegueUninitialized;
  class(): NSStoryboardSegue;  segueWithIdentifier_source_destination_performHandler(identifier: NSStoryboardSegueIdentifier, sourceController: any, destinationController: any, performHandler: Block): NSStoryboardSegue;

}

