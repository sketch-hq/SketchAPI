interface MSIntersectActionUninitialized<InitializedType = MSIntersectAction> extends MSBaseBooleanActionUninitialized<MSIntersectAction> {}
interface MSIntersectAction extends MSBaseBooleanAction {
  booleanIntersect(sender: any): IBAction;
}
declare const MSIntersectAction: {
  alloc(): MSIntersectActionUninitialized;
  class(): MSIntersectAction;
}

