interface MSActionControllerUninitialized<InitializedType = MSActionController> extends NSResponderUninitialized<MSActionController> {}

interface MSActionController extends NSResponder {
  registerAction(action: MSAction): void;
  actionForID(actionIdentifier: NSString | string): MSAction;
  actionForSelector(action: string): MSAction;
  performActionWithID_sender(actionIdentifier: NSString | string, sender: any | null): void;
  allActions(): NSArray<any>;
  insertAfterResponder(responder: NSResponder): void;
  forwardKeyEvent(event: NSEvent): boolean;
  willBeginActionWithID_context(actionID: NSString | string, context: any): void;
  didFinishActionWithID_context(actionID: NSString | string, context: any): void;
  didInstantActionWithID_context(actionID: NSString | string, context: any): void;
  registerActionObserver(observer: any): void;
  unregisterActionObserver(observer: any): void;
  performFakeActionWithID_context_block(actionID: NSString | string, context: any | null, block: MSActionFakeActionBlock | null): void;

  singleKeyShortcuts(): NSDictionary<any, any>;
  setSingleKeyShortcuts(singleKeyShortcuts: NSDictionary<any, any> | {[key: string]: any}): void;
}

declare const MSActionController: {
  alloc(): MSActionControllerUninitialized;
  class(): MSActionController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

