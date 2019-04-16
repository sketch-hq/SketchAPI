interface MSRunPluginActionUninitialized<InitializedType = MSRunPluginAction> extends MSActionUninitialized<MSRunPluginAction> {}
interface MSRunPluginAction extends MSAction {
  runPlugin(sender: any): IBAction;
}
declare const MSRunPluginAction: {
  alloc(): MSRunPluginActionUninitialized;
  class(): MSRunPluginAction;
}

