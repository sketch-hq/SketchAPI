interface IMSActionObserver {
  actionController_willBeginActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
  actionController_didFinishActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
  actionController_didInstantActionWithID_context(controller: MSActionController, actionID: NSString | string, context: any): void;
}

