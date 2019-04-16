interface NSCompoundPredicateUninitialized<InitializedType = NSCompoundPredicate> extends NSPredicateUninitialized<NSCompoundPredicate> {
  initWithType_subpredicates(type: NSCompoundPredicateType, subpredicates: NSArray<any> | any[]): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
}

interface NSCompoundPredicate extends NSPredicate {

  compoundPredicateType(): NSCompoundPredicateType;
  subpredicates(): NSArray<any>;
}

declare const NSCompoundPredicate: {
  alloc(): NSCompoundPredicateUninitialized;
  class(): NSCompoundPredicate;
  predicateWithFormat_argumentArray(predicateFormat: NSString | string, arguments: NSArray<any> | any[] | null): NSPredicate;
  predicateWithFormat(predicateFormat: NSString | string, ...args: any[]): NSPredicate;
  predicateWithFormat_arguments(predicateFormat: NSString | string, ...argList: any[]): NSPredicate;
  predicateFromMetadataQueryString(queryString: NSString | string): NSPredicate;
  predicateWithValue(value: boolean): NSPredicate;
  predicateWithBlock(block: Block): NSPredicate;
}

