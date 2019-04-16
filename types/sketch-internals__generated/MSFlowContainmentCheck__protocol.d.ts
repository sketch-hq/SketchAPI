interface IMSFlowContainmentCheck {
  firstFlowWithSymbolsFromDocument(document: MSImmutableDocumentData): MSImmutableFlowConnection;
  containsFlowWithSymbolsFromDocument(document: MSImmutableDocumentData): boolean;
}

