interface MSRemoveUnusedStylesActionUninitialized<InitializedType = MSRemoveUnusedStylesAction> extends MSBaseStyleActionUninitialized<MSRemoveUnusedStylesAction> {}
interface MSRemoveUnusedStylesAction extends MSBaseStyleAction {
  removeUnusedStyles(sender: any): IBAction;
}
declare const MSRemoveUnusedStylesAction: {
  alloc(): MSRemoveUnusedStylesActionUninitialized;
  class(): MSRemoveUnusedStylesAction;
}

