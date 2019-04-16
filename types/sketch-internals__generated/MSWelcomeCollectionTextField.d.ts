interface MSWelcomeCollectionTextFieldUninitialized<InitializedType = MSWelcomeCollectionTextField> extends NSTextFieldUninitialized<MSWelcomeCollectionTextField> {}
interface MSWelcomeCollectionTextField extends NSTextField {

  selected(): boolean;
  setSelected(selected: boolean): void;
}
declare const MSWelcomeCollectionTextField: {
  alloc(): MSWelcomeCollectionTextFieldUninitialized;
  class(): MSWelcomeCollectionTextField;
}

