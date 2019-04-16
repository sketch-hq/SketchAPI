interface NSPredicateEditorRowTemplateUninitialized<InitializedType = NSPredicateEditorRowTemplate> extends NSObjectUninitialized<NSPredicateEditorRowTemplate> {
  initWithLeftExpressions_rightExpressions_modifier_operators_options(leftExpressions: NSArray<any> | any[], rightExpressions: NSArray<any> | any[], modifier: NSComparisonPredicateModifier, operators: NSArray<any> | any[], options: NSUInteger): InitializedType;
  initWithLeftExpressions_rightExpressionAttributeType_modifier_operators_options(leftExpressions: NSArray<any> | any[], attributeType: NSAttributeType, modifier: NSComparisonPredicateModifier, operators: NSArray<any> | any[], options: NSUInteger): InitializedType;
  initWithCompoundTypes(compoundTypes: NSArray<any> | any[]): InitializedType;
  initWithCoder(aDecoder: NSCoder): InitializedType;
}

interface NSPredicateEditorRowTemplate extends NSObject, INSCoding, INSCopying {
  matchForPredicate(predicate: NSPredicate): number;
  setPredicate(predicate: NSPredicate): void;
  predicateWithSubpredicates(subpredicates: NSArray<any> | any[] | null): NSPredicate;
  displayableSubpredicatesOfPredicate(predicate: NSPredicate): NSArray<any>;
  encodeWithCoder(aCoder: NSCoder): void;
  copyWithZone(zone: NSZone | null): any;

  templateViews(): NSArray<any>;
  leftExpressions(): NSArray<any>;
  rightExpressions(): NSArray<any>;
  rightExpressionAttributeType(): NSAttributeType;
  modifier(): NSComparisonPredicateModifier;
  operators(): NSArray<any>;
  options(): NSUInteger;
  compoundTypes(): NSArray<any>;
}

declare const NSPredicateEditorRowTemplate: {
  alloc(): NSPredicateEditorRowTemplateUninitialized;
  class(): NSPredicateEditorRowTemplate;
  templatesWithAttributeKeyPaths_inEntityDescription(keyPaths: NSArray<any> | any[], entityDescription: NSEntityDescription): NSArray<any>;
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
  accessInstanceVariablesDirectly(): boolean;

}

