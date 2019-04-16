interface NSPredicateUninitialized<InitializedType = NSPredicate> extends NSObjectUninitialized<NSPredicate> {}
interface NSPredicate extends NSObject, INSSecureCoding, INSCopying {
  predicateWithSubstitutionVariables(variables: NSDictionary<any, any> | {[key: string]: any}): NSPredicate;
  evaluateWithObject(object: any | null): boolean;
  evaluateWithObject_substitutionVariables(object: any | null, bindings: NSDictionary<any, any> | {[key: string]: any} | null): boolean;
  allowEvaluation(): void;

  predicateFormat(): NSString;
}
declare const NSPredicate: {
  alloc(): NSPredicateUninitialized;
  class(): NSPredicate;  predicateWithFormat_argumentArray(predicateFormat: NSString | string, arguments: NSArray<any> | any[] | null): NSPredicate;
  predicateWithFormat(predicateFormat: NSString | string, ...args: any[]): NSPredicate;
  predicateWithFormat_arguments(predicateFormat: NSString | string, ...argList: any[]): NSPredicate;
  predicateFromMetadataQueryString(queryString: NSString | string): NSPredicate;
  predicateWithValue(value: boolean): NSPredicate;
  predicateWithBlock(block: Block): NSPredicate;

}

