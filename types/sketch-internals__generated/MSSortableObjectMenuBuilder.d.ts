interface MSSortableObjectMenuBuilderUninitialized<InitializedType = MSSortableObjectMenuBuilder> extends NSObjectUninitialized<MSSortableObjectMenuBuilder> {
  initWithDelegate(delegate: any): InitializedType;
}
interface MSSortableObjectMenuBuilder extends NSObject, INSMenuDelegate {
  menuItemsForSortableObjects_selectedObjects_target_selector(objects: NSArray<any> | any[], selectedObjects: NSArray<any> | any[], target: any, action: string): NSArray<any>;
  addSortableObjects_selectedObjects_toPopUpButton_target_selector(objects: NSArray<any> | any[], selectedObjects: NSArray<any> | any[], button: NSPopUpButton, target: any, action: string): void;
  menuWillOpen(menu: NSMenu): void;
  prepareForDisplay(menuItem: NSMenuItem): void;
}
declare const MSSortableObjectMenuBuilder: {
  alloc(): MSSortableObjectMenuBuilderUninitialized;
  class(): MSSortableObjectMenuBuilder;
}

