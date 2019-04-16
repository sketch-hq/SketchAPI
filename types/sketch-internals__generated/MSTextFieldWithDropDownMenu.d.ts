interface MSTextFieldWithDropDownMenuUninitialized<InitializedType = MSTextFieldWithDropDownMenu> extends NSTextFieldUninitialized<MSTextFieldWithDropDownMenu> {}
interface MSTextFieldWithDropDownMenu extends NSTextField {

  popupMenu(): NSMenu;
  setPopupMenu(popupMenu: NSMenu): void;
}
declare const MSTextFieldWithDropDownMenu: {
  alloc(): MSTextFieldWithDropDownMenuUninitialized;
  class(): MSTextFieldWithDropDownMenu;
}

