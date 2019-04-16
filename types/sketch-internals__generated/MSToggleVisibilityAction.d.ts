interface MSToggleVisibilityActionUninitialized<InitializedType = MSToggleVisibilityAction> extends MSDocumentActionUninitialized<MSToggleVisibilityAction> {}
interface MSToggleVisibilityAction extends MSDocumentAction {
  show(): void;
  hide(): void;
  defaultsKey(): NSString;
  prepareForNewWindow(): void;

  isActive(): boolean;
}
declare const MSToggleVisibilityAction: {
  alloc(): MSToggleVisibilityActionUninitialized;
  class(): MSToggleVisibilityAction;
}

