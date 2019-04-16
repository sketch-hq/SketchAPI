interface JSTalkUninitialized<InitializedType = JSTalk> extends COScriptUninitialized<JSTalk> {}

interface JSTalk extends COScript {
}

declare const JSTalk: {
  alloc(): JSTalkUninitialized;
  class(): JSTalk;
  insertInMainMenu(): boolean;
  loadBridgeSupportFileAtURL(url: NSURL): void;
  listen(): void;
  resetPlugins(): void;
  loadPlugins(): void;
  setShouldLoadJSTPlugins(b: boolean): void;
  application(app: NSString | string): any;
  app(app: NSString | string): any;
  currentCOScript(): COScript;
  setDebugController(debugController: any): any;
  setFlowDelegate(flowDelegate: any): any;
  accessInstanceVariablesDirectly(): boolean;

}

