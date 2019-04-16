interface NSPredicateEditorUninitialized<InitializedType = NSPredicateEditor> extends NSRuleEditorUninitialized<NSPredicateEditor> {}
interface NSPredicateEditor extends NSRuleEditor {

  rowTemplates(): NSArray<any>;
  setRowTemplates(rowTemplates: NSArray<any> | any[]): void;
}
declare const NSPredicateEditor: {
  alloc(): NSPredicateEditorUninitialized;
  class(): NSPredicateEditor;
}

