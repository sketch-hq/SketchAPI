interface MSListTypeActionNoneUninitialized<InitializedType = MSListTypeActionNone> extends MSListTypeActionUninitialized<MSListTypeActionNone> {}

interface MSListTypeActionNone extends MSListTypeAction {
  setListTypeNone(sender: any): IBAction;
}

declare const MSListTypeActionNone: {
  alloc(): MSListTypeActionNoneUninitialized;
  class(): MSListTypeActionNone;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

