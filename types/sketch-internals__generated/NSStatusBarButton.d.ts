interface NSStatusBarButtonUninitialized<InitializedType = NSStatusBarButton> extends NSButtonUninitialized<NSStatusBarButton> {}
interface NSStatusBarButton extends NSButton {

  appearsDisabled(): boolean;
  setAppearsDisabled(appearsDisabled: boolean): void;
}
declare const NSStatusBarButton: {
  alloc(): NSStatusBarButtonUninitialized;
  class(): NSStatusBarButton;
}

