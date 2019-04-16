interface MSRevealPluginsActionUninitialized<InitializedType = MSRevealPluginsAction> extends MSActionUninitialized<MSRevealPluginsAction> {}

interface MSRevealPluginsAction extends MSAction {
  revealPlugins(sender: any): IBAction;
}

declare const MSRevealPluginsAction: {
  alloc(): MSRevealPluginsActionUninitialized;
  class(): MSRevealPluginsAction;
  imageName(): NSString;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

