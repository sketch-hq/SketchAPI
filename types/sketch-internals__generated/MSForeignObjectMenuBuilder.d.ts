interface MSForeignObjectMenuBuilderUninitialized<InitializedType = MSForeignObjectMenuBuilder> extends MSSortableObjectMenuBuilderUninitialized<MSForeignObjectMenuBuilder> {
  initWithCollector_delegate(collector: MSForeignObjectCollector, delegate: any): InitializedType;
  initWithProvider_delegate(provider: any, delegate: any): InitializedType;
}
interface MSForeignObjectMenuBuilder extends MSSortableObjectMenuBuilder {
  buildMenuItemsForMenu_withTarget_selector(menu: NSMenu, target: any, selector: string): NSArray<any>;
  buildMenuItemsForMenu_withAction(menu: NSMenu, action: MSAction): NSArray<any>;
  gatherSymbolsForMenus(): NSArray<any>;
  menuItemForLibrary_mainMenu_target_selector(library: MSAssetLibrary | null, mainMenu: boolean, target: any | null, selector: string | null): NSMenuItem;
  addStyleOverridesToMenu_withTarget_action_forOverride_inDocument(menu: NSMenu, target: any | null, action: string, availableOverride: MSAvailableOverride, documentData: MSDocumentData): void;
  addSymbolOverridesToMenu_withTarget_action_forOverride_inDocument(menu: NSMenu, target: any | null, action: string, availableOverride: MSAvailableOverride, documentData: MSDocumentData): void;

  filter(): MSForeignObjectCollectionFilter;
  setFilter(filter: MSForeignObjectCollectionFilter): void;
  requiresLocalSubmenu(): boolean;
  setRequiresLocalSubmenu(requiresLocalSubmenu: boolean): void;
  collector(): MSForeignObjectCollector;
}
declare const MSForeignObjectMenuBuilder: {
  alloc(): MSForeignObjectMenuBuilderUninitialized;
  class(): MSForeignObjectMenuBuilder;  filterForReplacingSymbolInstances(layers: NSArray<any> | any[]): MSForeignObjectCollectionFilter;

}

