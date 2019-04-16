interface NSTouchBarUninitialized<InitializedType = NSTouchBar> extends NSObjectUninitialized<NSTouchBar> {
  init(): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}
interface NSTouchBar extends NSObject, INSCoding, INSCoding {
  itemForIdentifier(identifier: NSTouchBarItemIdentifier): NSTouchBarItem;

  customizationIdentifier(): NSTouchBarCustomizationIdentifier;
  setCustomizationIdentifier(customizationIdentifier: NSTouchBarCustomizationIdentifier): void;
  customizationAllowedItemIdentifiers(): NSArray<any>;
  setCustomizationAllowedItemIdentifiers(customizationAllowedItemIdentifiers: NSArray<any> | any[]): void;
  customizationRequiredItemIdentifiers(): NSArray<any>;
  setCustomizationRequiredItemIdentifiers(customizationRequiredItemIdentifiers: NSArray<any> | any[]): void;
  defaultItemIdentifiers(): NSArray<any>;
  setDefaultItemIdentifiers(defaultItemIdentifiers: NSArray<any> | any[]): void;
  itemIdentifiers(): NSArray<any>;
  principalItemIdentifier(): NSTouchBarItemIdentifier;
  setPrincipalItemIdentifier(principalItemIdentifier: NSTouchBarItemIdentifier): void;
  escapeKeyReplacementItemIdentifier(): NSTouchBarItemIdentifier;
  setEscapeKeyReplacementItemIdentifier(escapeKeyReplacementItemIdentifier: NSTouchBarItemIdentifier): void;
  templateItems(): NSSet<any>;
  setTemplateItems(templateItems: NSSet<any>): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  visible(): boolean;
}
declare const NSTouchBar: {
  alloc(): NSTouchBarUninitialized;
  class(): NSTouchBar;
}

