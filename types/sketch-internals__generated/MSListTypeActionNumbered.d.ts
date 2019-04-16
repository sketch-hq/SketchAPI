interface MSListTypeActionNumberedUninitialized<InitializedType = MSListTypeActionNumbered> extends MSListTypeActionUninitialized<MSListTypeActionNumbered> {}
interface MSListTypeActionNumbered extends MSListTypeAction {
  setListTypeNumbered(sender: any): IBAction;
}
declare const MSListTypeActionNumbered: {
  alloc(): MSListTypeActionNumberedUninitialized;
  class(): MSListTypeActionNumbered;
}

