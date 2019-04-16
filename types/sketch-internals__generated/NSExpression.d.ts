interface NSExpressionUninitialized<InitializedType = NSExpression> extends NSObjectUninitialized<NSExpression> {
  initWithExpressionType(type: NSExpressionType): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}
interface NSExpression extends NSObject, INSSecureCoding, INSCopying {
  expressionValueWithObject_context(object: any | null, context: NSMutableDictionary<any, any> | {[key: string]: any} | null): any;
  allowEvaluation(): void;

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
  class(): NSExpression;  expressionWithFormat_argumentArray(expressionFormat: NSString | string, arguments: NSArray<any> | any[]): NSExpression;
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

}

