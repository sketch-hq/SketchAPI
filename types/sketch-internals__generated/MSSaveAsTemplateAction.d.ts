interface MSSaveAsTemplateActionUninitialized<InitializedType = MSSaveAsTemplateAction> extends MSDocumentActionUninitialized<MSSaveAsTemplateAction> {}

interface MSSaveAsTemplateAction extends MSDocumentAction {
  saveAsTemplate(sender: any): IBAction;
}

declare const MSSaveAsTemplateAction: {
  alloc(): MSSaveAsTemplateActionUninitialized;
  class(): MSSaveAsTemplateAction;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

