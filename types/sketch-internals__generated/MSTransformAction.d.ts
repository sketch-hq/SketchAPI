interface MSTransformActionUninitialized<InitializedType = MSTransformAction> extends MSEventHandlerActionUninitialized<MSTransformAction> {}

interface MSTransformAction extends MSEventHandlerAction {
  transform(sender: any): IBAction;
}

declare const MSTransformAction: {
  alloc(): MSTransformActionUninitialized;
  class(): MSTransformAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

