interface MSMenuItemHelperUninitialized<InitializedType = MSMenuItemHelper> extends NSObjectUninitialized<MSMenuItemHelper> {}
interface MSMenuItemHelper extends NSObject {
  menuItem(): NSMenuItem;

  title(): NSString;
  setTitle(title: NSString | string): void;
  tag(): NSInteger;
  setTag(tag: NSInteger): void;
  isSeparator(): boolean;
  setIsSeparator(isSeparator: boolean): void;
}
declare const MSMenuItemHelper: {
  alloc(): MSMenuItemHelperUninitialized;
  class(): MSMenuItemHelper;  itemWithTitle_tag(title: NSString | string | null, tag: NSInteger): MSMenuItemHelper;
  itemWithTitle(title: NSString | string | null): MSMenuItemHelper;
  separator(): MSMenuItemHelper;

}

