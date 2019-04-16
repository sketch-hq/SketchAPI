interface NSFontManagerUninitialized<InitializedType = NSFontManager> extends NSObjectUninitialized<NSFontManager> {}

interface NSFontManager extends NSObject, INSMenuItemValidation {
  setSelectedFont_isMultiple(fontObj: NSFont, flag: boolean): void;
  setFontMenu(newMenu: NSMenu): void;
  fontMenu(create: boolean): NSMenu;
  fontPanel(create: boolean): NSFontPanel;
  fontWithFamily_traits_weight_size(family: NSString | string, traits: NSFontTraitMask, weight: NSInteger, size: CGFloat): NSFont;
  traitsOfFont(fontObj: NSFont): NSFontTraitMask;
  weightOfFont(fontObj: NSFont): NSInteger;
  availableMembersOfFontFamily(fam: NSString | string): NSArray<any>;
  convertFont(fontObj: NSFont): NSFont;
  convertFont_toSize(fontObj: NSFont, size: CGFloat): NSFont;
  convertFont_toFace(fontObj: NSFont, typeface: NSString | string): NSFont;
  convertFont_toFamily(fontObj: NSFont, family: NSString | string): NSFont;
  convertFont_toHaveTrait(fontObj: NSFont, trait: NSFontTraitMask): NSFont;
  convertFont_toNotHaveTrait(fontObj: NSFont, trait: NSFontTraitMask): NSFont;
  convertWeight_ofFont(upFlag: boolean, fontObj: NSFont): NSFont;
  sendAction(): boolean;
  localizedNameForFamily_face(family: NSString | string, faceKey: NSString | string | null): NSString;
  setSelectedAttributes_isMultiple(attributes: NSDictionary<any, any> | {[key: string]: any}, flag: boolean): void;
  convertAttributes(attributes: NSDictionary<any, any> | {[key: string]: any}): NSDictionary<any, any>;
  availableFontNamesMatchingFontDescriptor(descriptor: NSFontDescriptor): NSArray<any>;
  fontDescriptorsInCollection(collectionNames: NSString | string): NSArray<any>;
  addCollection_options(collectionName: NSString | string, collectionOptions: NSFontCollectionOptions): boolean;
  removeCollection(collectionName: NSString | string): boolean;
  addFontDescriptors_toCollection(descriptors: NSArray<any> | any[], collectionName: NSString | string): void;
  removeFontDescriptor_fromCollection(descriptor: NSFontDescriptor, collection: NSString | string): void;
  convertFontTraits(traits: NSFontTraitMask): NSFontTraitMask;
  fontNamed_hasTraits(fName: NSString | string, someTraits: NSFontTraitMask): boolean;
  availableFontNamesWithTraits(someTraits: NSFontTraitMask): NSArray<any>;
  addFontTrait(sender: any | null): void;
  removeFontTrait(sender: any | null): void;
  modifyFontViaPanel(sender: any | null): void;
  modifyFont(sender: any | null): void;
  orderFrontFontPanel(sender: any | null): void;
  orderFrontStylesPanel(sender: any | null): void;
  validateMenuItem(menuItem: NSMenuItem): boolean;

  multiple(): boolean;
  selectedFont(): NSFont;
  availableFonts(): NSArray<any>;
  availableFontFamilies(): NSArray<any>;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  action(): string;
  setAction(action: string): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  collectionNames(): NSArray<any>;
  currentFontAction(): NSFontAction;
  target(): any;
  setTarget(target: any): void;
}

declare const NSFontManager: {
  alloc(): NSFontManagerUninitialized;
  class(): NSFontManager;
  setFontPanelFactory(factoryId: any | null): void;
  setFontManagerFactory(factoryId: any | null): void;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  sharedFontManager(): NSFontManager;
  accessInstanceVariablesDirectly(): boolean;

}

