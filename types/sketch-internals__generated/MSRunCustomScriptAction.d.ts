interface MSRunCustomScriptActionUninitialized<InitializedType = MSRunCustomScriptAction> extends MSActionUninitialized<MSRunCustomScriptAction> {}

interface MSRunCustomScriptAction extends MSAction {
  runCustomScript(sender: any): IBAction;
}

declare const MSRunCustomScriptAction: {
  alloc(): MSRunCustomScriptActionUninitialized;
  class(): MSRunCustomScriptAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

