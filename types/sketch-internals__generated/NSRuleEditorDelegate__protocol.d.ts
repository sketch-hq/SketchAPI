interface INSRuleEditorDelegate {
  ruleEditor_numberOfChildrenForCriterion_withRowType(editor: NSRuleEditor, criterion: any | null, rowType: NSRuleEditorRowType): NSInteger;
  ruleEditor_child_forCriterion_withRowType(editor: NSRuleEditor, index: NSInteger, criterion: any | null, rowType: NSRuleEditorRowType): any;
  ruleEditor_displayValueForCriterion_inRow(editor: NSRuleEditor, criterion: any, row: NSInteger): any;
  ruleEditor_predicatePartsForCriterion_withDisplayValue_inRow(editor: NSRuleEditor, criterion: any, value: any, row: NSInteger): NSDictionary<any, any>;
  ruleEditorRowsDidChange(notification: NSNotification): void;
}

