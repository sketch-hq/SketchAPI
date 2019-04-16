interface NSSortDescriptorUninitialized<InitializedType = NSSortDescriptor> extends NSObjectUninitialized<NSSortDescriptor> {
  initWithKey_ascending(key: NSString | string | null, ascending: boolean): InitializedType;
  initWithKey_ascending_selector(key: NSString | string | null, ascending: boolean, selector: string | null): InitializedType;
  initWithCoder(coder: NSCoder): InitializedType;
  initWithKey_ascending_comparator(key: NSString | string | null, ascending: boolean, cmptr: NSComparator): InitializedType;
}
interface NSSortDescriptor extends NSObject, INSSecureCoding, INSCopying {
  allowEvaluation(): void;
  compareObject_toObject(object1: any, object2: any): NSComparisonResult;

  key(): NSString;
  ascending(): boolean;
  selector(): string;
  comparator(): NSComparator;
  reversedSortDescriptor(): any;
}
declare const NSSortDescriptor: {
  alloc(): NSSortDescriptorUninitialized;
  class(): NSSortDescriptor;  sortDescriptorWithKey_ascending(key: NSString | string | null, ascending: boolean): NSSortDescriptor;
  sortDescriptorWithKey_ascending_selector(key: NSString | string | null, ascending: boolean, selector: string | null): NSSortDescriptor;
  sortDescriptorWithKey_ascending_comparator(key: NSString | string | null, ascending: boolean, cmptr: NSComparator): NSSortDescriptor;
  localizedCaseInsensitiveSortDescriptorWithKey_ascending(key: NSString | string | null, ascending: boolean): NSSortDescriptor;

}

