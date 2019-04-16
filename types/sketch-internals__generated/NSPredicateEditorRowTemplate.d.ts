interface NSPredicateEditorRowTemplateUninitialized<InitializedType = NSPredicateEditorRowTemplate> extends NSObjectUninitialized<NSPredicateEditorRowTemplate> {
  initWithLeftExpressions_rightExpressions_modifier_operators_options(leftExpressions: NSArray<any> | any[], rightExpressions: NSArray<any> | any[], modifier: NSComparisonPredicateModifier, operators: NSArray<any> | any[], options: NSUInteger): InitializedType;
  initWithLeftExpressions_rightExpressionAttributeType_modifier_operators_options(leftExpressions: NSArray<any> | any[], attributeType: NSAttributeType, modifier: NSComparisonPredicateModifier, operators: NSArray<any> | any[], options: NSUInteger): InitializedType;
  initWithCompoundTypes(compoundTypes: NSArray<any> | any[]): InitializedType;
}
interface NSPredicateEditorRowTemplate extends NSObject, INSCoding, INSCopying {
  matchForPredicate(predicate: NSPredicate): number;
  setPredicate(predicate: NSPredicate): void;
  predicateWithSubpredicates(subpredicates: NSArray<any> | any[] | null): NSPredicate;
  displayableSubpredicatesOfPredicate(predicate: NSPredicate): NSArray<any>;

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
  class(): NSPredicateEditorRowTemplate;  templatesWithAttributeKeyPaths_inEntityDescription(keyPaths: NSArray<any> | any[], entityDescription: NSEntityDescription): NSArray<any>;

}

