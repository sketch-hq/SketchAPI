interface NSUndoManagerUninitialized<InitializedType = NSUndoManager> extends NSObjectUninitialized<NSUndoManager> {}
interface NSUndoManager extends NSObject {
  beginUndoGrouping(): void;
  endUndoGrouping(): void;
  disableUndoRegistration(): void;
  enableUndoRegistration(): void;
  undo(): void;
  redo(): void;
  undoNestedGroup(): void;
  removeAllActions(): void;
  removeAllActionsWithTarget(target: any): void;
  registerUndoWithTarget_selector_object(target: any, selector: string, anObject: any | null): void;
  prepareWithInvocationTarget(target: any): any;
  registerUndoWithTarget_handler(target: any, undoHandler: Block): void;
  setActionIsDiscardable(discardable: boolean): void;
  setActionName(actionName: NSString | string): void;
  undoMenuTitleForUndoActionName(actionName: NSString | string): NSString;
  redoMenuTitleForUndoActionName(actionName: NSString | string): NSString;
  setActionName_sender(actionName: NSString | string, senderID: NSString | string): void;

  groupingLevel(): NSInteger;
  undoRegistrationEnabled(): boolean;
  groupsByEvent(): boolean;
  setGroupsByEvent(groupsByEvent: boolean): void;
  levelsOfUndo(): NSUInteger;
  setLevelsOfUndo(levelsOfUndo: NSUInteger): void;
  runLoopModes(): NSArray<any>;
  setRunLoopModes(runLoopModes: NSArray<any> | any[]): void;
  canUndo(): boolean;
  canRedo(): boolean;
  undoing(): boolean;
  redoing(): boolean;
  undoActionIsDiscardable(): boolean;
  redoActionIsDiscardable(): boolean;
  undoActionName(): NSString;
  redoActionName(): NSString;
  undoMenuItemTitle(): NSString;
  redoMenuItemTitle(): NSString;
}
declare const NSUndoManager: {
  alloc(): NSUndoManagerUninitialized;
  class(): NSUndoManager;
}

