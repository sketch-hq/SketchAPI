interface NSComparisonPredicateUninitialized<InitializedType = NSComparisonPredicate> extends NSPredicateUninitialized<NSComparisonPredicate> {
  initWithLeftExpression_rightExpression_modifier_type_options(lhs: NSExpression, rhs: NSExpression, modifier: NSComparisonPredicateModifier, type: NSPredicateOperatorType, options: NSComparisonPredicateOptions): InitializedType;
  initWithLeftExpression_rightExpression_customSelector(lhs: NSExpression, rhs: NSExpression, selector: string): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}

interface NSComparisonPredicate extends NSPredicate {

  predicateOperatorType(): NSPredicateOperatorType;
  comparisonPredicateModifier(): NSComparisonPredicateModifier;
  leftExpression(): NSExpression;
  rightExpression(): NSExpression;
  customSelector(): string;
  options(): NSComparisonPredicateOptions;
}

declare const NSComparisonPredicate: {
  alloc(): NSComparisonPredicateUninitialized;
  class(): NSComparisonPredicate;
  predicateWithLeftExpression_rightExpression_modifier_type_options(lhs: NSExpression, rhs: NSExpression, modifier: NSComparisonPredicateModifier, type: NSPredicateOperatorType, options: NSComparisonPredicateOptions): NSComparisonPredicate;
  predicateWithLeftExpression_rightExpression_customSelector(lhs: NSExpression, rhs: NSExpression, selector: string): NSComparisonPredicate;
  predicateWithFormat_argumentArray(predicateFormat: NSString | string, arguments: NSArray<any> | any[] | null): NSPredicate;
  predicateWithFormat(predicateFormat: NSString | string, ...args: any[]): NSPredicate;
  predicateWithFormat_arguments(predicateFormat: NSString | string, ...argList: any[]): NSPredicate;
  predicateFromMetadataQueryString(queryString: NSString | string): NSPredicate;
  predicateWithValue(value: boolean): NSPredicate;
  predicateWithBlock(block: Block): NSPredicate;
}

