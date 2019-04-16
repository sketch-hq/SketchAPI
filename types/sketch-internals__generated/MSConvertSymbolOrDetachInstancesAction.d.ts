interface MSConvertSymbolOrDetachInstancesActionUninitialized<InitializedType = MSConvertSymbolOrDetachInstancesAction> extends MSBaseConvertSymbolOrDetachInstancesActionUninitialized<MSConvertSymbolOrDetachInstancesAction> {}
interface MSConvertSymbolOrDetachInstancesAction extends MSBaseConvertSymbolOrDetachInstancesAction {
  detachSymbolInstances(sender: any): IBAction;
}
declare const MSConvertSymbolOrDetachInstancesAction: {
  alloc(): MSConvertSymbolOrDetachInstancesActionUninitialized;
  class(): MSConvertSymbolOrDetachInstancesAction;
}

