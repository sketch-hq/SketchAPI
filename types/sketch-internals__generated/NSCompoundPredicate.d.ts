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
}

