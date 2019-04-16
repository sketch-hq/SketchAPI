interface AppControllerUninitialized<InitializedType = AppController> extends NSObjectUninitialized<AppController> {}
interface AppController extends NSObject, INSApplicationDelegate, INSWindowDelegate, INSMenuDelegate, INSUserNotificationCenterDelegate, IMSDataSupplierManagerDelegate {
  actionClasses(): NSArray<any>;
  runPluginCommandWithIdentifier_fromBundleAtURL_context(identifier: NSString | string, url: NSURL, context: NSDictionary<any, any> | {[key: string]: any}): NSString;
  runPluginCommandWithIdentifier_fromBundleAtURL_context_portToAsnwerTo(identifier: NSString | string, url: NSURL, context: NSDictionary<any, any> | {[key: string]: any}, port: NSString | string): NSString;
  revealPlugin(sender: any): IBAction;
  buildPluginsMenu(menu: NSMenu): void;
  runPluginCommand_fromMenu_context(command: MSPluginCommand, fromMenu: boolean, context: NSDictionary<any, any> | {[key: string]: any}): NSString;
  runPluginCommand_fromMenu_context_onComplete(command: MSPluginCommand, fromMenu: boolean, context: NSDictionary<any, any> | {[key: string]: any}, callback: Block): NSString;
  runPluginScript_name(script: NSString | string, name: NSString | string): NSString;
  runPluginScript_handler_name_withPreprocess(script: NSString | string, handler: NSString | string, name: NSString | string, shoulPreprocess: boolean): NSString;
  validatePluginMenuItem_documentShowing(menuItem: NSMenuItem, documentShowing: boolean): boolean;
  registerURLScheme(): void;
  checkDefaults(): void;
  openPreferencesWindowWithPreferencePaneIdentifier(identifier: NSString | string): void;
  openAboutWindow(sender: any): IBAction;
  revealTemplatesFolderInFinder(sender: any): IBAction;
  buy(sender: any): IBAction;
  refreshCurrentDocument(): void;
  currentDocumentDidChange(): void;
  refreshDocumentWindowBadges(): void;
  openTemplateAtPath(templateURL: NSURL): void;
  templateLibraryPath(): NSURL;
  toggleDarkMode(sender: any): IBAction;

  lastRun(): MSPluginCommand;
  shapesMenu(): any;
  setShapesMenu(shapesMenu: any): void;
  pluginsMenuItem(): NSMenuItem;
  setPluginsMenuItem(pluginsMenuItem: NSMenuItem): void;
  templatesMenu(): NSMenu;
  setTemplatesMenu(templatesMenu: NSMenu): void;
  printMenu(): NSMenu;
  setPrintMenu(printMenu: NSMenu): void;
  prototypingMenuItem(): NSMenuItem;
  setPrototypingMenuItem(prototypingMenuItem: NSMenuItem): void;
  debugMenuItem(): NSMenuItem;
  setDebugMenuItem(debugMenuItem: NSMenuItem): void;
  cloudEnvironmentMenuItem(): NSMenuItem;
  setCloudEnvironmentMenuItem(cloudEnvironmentMenuItem: NSMenuItem): void;
  updateTimer(): NSTimer;
  setUpdateTimer(updateTimer: NSTimer): void;
  pasteboardManager(): MSPasteboardManager;
  setPasteboardManager(pasteboardManager: MSPasteboardManager): void;
  mirrorController(): SMKMirrorController;
  setMirrorController(mirrorController: SMKMirrorController): void;
  mirrorDataProvider(): MSMirrorDataProvider;
  setMirrorDataProvider(mirrorDataProvider: MSMirrorDataProvider): void;
  dataSupplierManager(): MSDataSupplierManager;
  crashLogManager(): MSCrashLogManager;
  pluginManager(): MSPluginManagerWithActions;
  licenseManager(): BCLicenseManager;
  updateController(): MSUpdateController;
  actionController(): MSActionController;
  librariesController(): MSAssetLibraryController;
  hud(): MSHUDWindowController;
  creationTime(): NSTimeInterval;
  launchStartTime(): NSTimeInterval;
  launchEndTime(): NSTimeInterval;
  sketchSafeModeOn(): boolean;
  needToInformUserPluginsAreDisabled(): boolean;
  setNeedToInformUserPluginsAreDisabled(needToInformUserPluginsAreDisabled: boolean): void;
  canShowWelcomeWindowForUserAction(): boolean;
  canCreateDocuments(): boolean;
  setCanCreateDocuments(canCreateDocuments: boolean): void;
}
declare const AppController: {
  alloc(): AppControllerUninitialized;
  class(): AppController;  sharedInstance(): AppController;

}

