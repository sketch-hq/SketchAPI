interface NSExpressionUninitialized<InitializedType = NSExpression> extends NSObjectUninitialized<NSExpression> {
  initWithExpressionType(type: NSExpressionType): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}

interface NSExpression extends NSObject, INSSecureCoding, INSCopying {
  expressionValueWithObject_context(object: any | null, context: NSMutableDictionary<any, any> | {[key: string]: any} | null): any;
  allowEvaluation(): void;
  copyWithZone(zone: NSZone | null): any;

  expressionType(): NSExpressionType;
  constantValue(): any;
  keyPath(): NSString;
  function(): NSString;
  variable(): NSString;
  operand(): NSExpression;
  arguments(): NSArray<any>;
  collection(): any;
  predicate(): NSPredicate;
  leftExpression(): NSExpression;
  rightExpression(): NSExpression;
  trueExpression(): NSExpression;
  falseExpression(): NSExpression;
}

declare const NSExpression: {
  alloc(): NSExpressionUninitialized;
  class(): NSExpression;
  expressionWithFormat_argumentArray(expressionFormat: NSString | string, arguments: NSArray<any> | any[]): NSExpression;
  expressionWithFormat(expressionFormat: NSString | string, ...args: any[]): NSExpression;
  expressionWithFormat_arguments(expressionFormat: NSString | string, ...argList: any[]): NSExpression;
  expressionForConstantValue(obj: any | null): NSExpression;
  expressionForEvaluatedObject(): NSExpression;
  expressionForVariable(string: NSString | string): NSExpression;
  expressionForKeyPath(keyPath: NSString | string): NSExpression;
  expressionForFunction_arguments(name: NSString | string, parameters: NSArray<any> | any[]): NSExpression;
  expressionForAggregate(subexpressions: NSArray<any> | any[]): NSExpression;
  expressionForUnionSet_with(left: NSExpression, right: NSExpression): NSExpression;
  expressionForIntersectSet_with(left: NSExpression, right: NSExpression): NSExpression;
  expressionForMinusSet_with(left: NSExpression, right: NSExpression): NSExpression;
  expressionForSubquery_usingIteratorVariable_predicate(expression: NSExpression, variable: NSString | string, predicate: NSPredicate): NSExpression;
  expressionForFunction_selectorName_arguments(target: NSExpression, name: NSString | string, parameters: NSArray<any> | any[] | null): NSExpression;
  expressionForAnyKey(): NSExpression;
  expressionForBlock_arguments(block: Block, arguments: NSArray<any> | any[] | null): NSExpression;
  expressionForConditional_trueExpression_falseExpression(predicate: NSPredicate, trueExpression: NSExpression, falseExpression: NSExpression): NSExpression;
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
  supportsSecureCoding(): boolean;
  accessInstanceVariablesDirectly(): boolean;

}

