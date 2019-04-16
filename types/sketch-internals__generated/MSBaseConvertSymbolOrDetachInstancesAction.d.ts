interface MSBaseConvertSymbolOrDetachInstancesActionUninitialized<InitializedType = MSBaseConvertSymbolOrDetachInstancesAction> extends MSDocumentActionUninitialized<MSBaseConvertSymbolOrDetachInstancesAction> {}

interface MSBaseConvertSymbolOrDetachInstancesAction extends MSDocumentAction {
}

declare const MSBaseConvertSymbolOrDetachInstancesAction: {
  alloc(): MSBaseConvertSymbolOrDetachInstancesActionUninitialized;
  class(): MSBaseConvertSymbolOrDetachInstancesAction;
}

