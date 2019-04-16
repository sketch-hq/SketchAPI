interface BCWindowBadgeUninitialized<InitializedType = BCWindowBadge> extends NSButtonUninitialized<BCWindowBadge> {}
interface BCWindowBadge extends NSButton {

  tintColor(): NSColor;
  setTintColor(tintColor: NSColor): void;
}
declare const BCWindowBadge: {
  alloc(): BCWindowBadgeUninitialized;
  class(): BCWindowBadge;
}

