interface NSAccessibilityCustomActionUninitialized<InitializedType = NSAccessibilityCustomAction> extends NSObjectUninitialized<NSAccessibilityCustomAction> {
  initWithName_handler(name: NSString | string, handler: Block): InitializedType;
  initWithName_target_selector(name: NSString | string, target: any, selector: string): InitializedType;
}
interface NSAccessibilityCustomAction extends NSObject {

  name(): NSString;
  setName(name: NSString | string): void;
  target(): any;
  setTarget(target: any): void;
  selector(): string;
  setSelector(selector: string): void;
}
declare const NSAccessibilityCustomAction: {
  alloc(): NSAccessibilityCustomActionUninitialized;
  class(): NSAccessibilityCustomAction;
}

