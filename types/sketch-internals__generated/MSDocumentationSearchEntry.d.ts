interface MSDocumentationSearchEntryUninitialized<InitializedType = MSDocumentationSearchEntry> extends NSObjectUninitialized<MSDocumentationSearchEntry> {}
interface MSDocumentationSearchEntry extends NSObject {
  titles(): NSArray<any>;
  matchesSearchQuery(query: NSString | string): boolean;
  show(): void;
}
declare const MSDocumentationSearchEntry: {
  alloc(): MSDocumentationSearchEntryUninitialized;
  class(): MSDocumentationSearchEntry;  searchEntryWithDictionary(dict: NSDictionary<any, any> | {[key: string]: any}): MSDocumentationSearchEntry;
  markSearchEntriesAsDuplicates(entries: NSArray<any> | any[]): void;

}

