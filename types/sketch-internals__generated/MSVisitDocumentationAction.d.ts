interface MSVisitDocumentationActionUninitialized<InitializedType = MSVisitDocumentationAction> extends MSActionUninitialized<MSVisitDocumentationAction> {}

interface MSVisitDocumentationAction extends MSAction {
  visitDocumentation(sender: any): IBAction;
}

declare const MSVisitDocumentationAction: {
  alloc(): MSVisitDocumentationActionUninitialized;
  class(): MSVisitDocumentationAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

