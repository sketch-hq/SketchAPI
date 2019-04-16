interface MSRunLastScriptActionUninitialized<InitializedType = MSRunLastScriptAction> extends MSActionUninitialized<MSRunLastScriptAction> {}

interface MSRunLastScriptAction extends MSAction {
  runLastScript(sender: any): IBAction;
}

declare const MSRunLastScriptAction: {
  alloc(): MSRunLastScriptActionUninitialized;
  class(): MSRunLastScriptAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

