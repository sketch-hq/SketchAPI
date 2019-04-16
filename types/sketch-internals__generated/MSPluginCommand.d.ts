interface MSPluginCommandUninitialized<InitializedType = MSPluginCommand> extends NSObjectUninitialized<MSPluginCommand> {
  initWithScript_identifier_name_handlers_shortcut_scope(script: MSPluginScript, identifier: NSString | string, name: NSString | string, handlers: NSDictionary<any, any> | {[key: string]: any}, shortcut: NSString | string, scope: MSPluginCommandScope): InitializedType;
  initWithScript_identifier_name_runHandler_scope(script: MSPluginScript, identifier: NSString | string, name: NSString | string, runHandler: NSString | string, scope: MSPluginCommandScope): InitializedType;
}

interface MSPluginCommand extends NSObject, ICOPrintController {
  runHandlerWithKey_context_manager(handlerKey: NSString | string, context: NSDictionary<any, any> | {[key: string]: any}, manager: MSPluginManager): NSString;
  runHandlerWithKey_context_manager_onComplete(handlerKey: NSString | string, context: NSDictionary<any, any> | {[key: string]: any}, manager: MSPluginManager, callback: Block): NSString;
  runHandler_context_manager(handler: NSString | string, context: NSDictionary<any, any> | {[key: string]: any}, manager: MSPluginManager): NSString;
  runHandler_context_manager_onComplete(handler: NSString | string, context: NSDictionary<any, any> | {[key: string]: any}, manager: MSPluginManager, callback: Block): NSString;
  run_manager(context: NSDictionary<any, any> | {[key: string]: any}, manager: MSPluginManager): NSString;
  run_manager_onComplete(context: NSDictionary<any, any> | {[key: string]: any}, manager: MSPluginManager, callback: Block): NSString;
  tearDownIfFinished(): boolean;
  hasRunHandler(): boolean;
  menuItemWithAction(selector: string): NSMenuItem;
  metadata(): NSDictionary<any, any>;
  print(value: any): void;
  logString(): NSString;
  scriptEncounteredException(e: NSException | Error): void;
  valueForKey_onLayer_forPluginIdentifier(key: NSString | string, layer: MSLayer, identifier: NSString | string): any;
  setValue_forKey_onLayer_forPluginIdentifier(value: any, key: NSString | string, layer: MSLayer, identifier: NSString | string): void;
  valueForKey_onLayer(key: NSString | string, layer: MSLayer): any;
  setValue_forKey_onLayer(value: any, key: NSString | string, layer: MSLayer): void;
  valueForKey_onDocument_forPluginIdentifier(key: NSString | string, document: MSDocumentData, identifier: NSString | string): any;
  setValue_forKey_onDocument_forPluginIdentifier(value: any, key: NSString | string, document: MSDocumentData, identifier: NSString | string): void;
  valueForKey_onDocument(key: NSString | string, document: MSDocumentData): any;
  setValueForKey_forKey_onDocument(value: any, key: NSString | string, document: MSDocumentData): void;
  scriptEncounteredException(exception: NSException | Error): void;
  print(s: any): void;

  identifier(): NSString;
  commandSpecifier(): MSPluginCommandSpecifier;
  script(): MSPluginScript;
  name(): NSString;
  shortcut(): NSString;
  pluginBundle(): MSPluginBundle;
  setPluginBundle(pluginBundle: MSPluginBundle): void;
  scope(): MSPluginCommandScope;
  stayRunning(): boolean;
  setStayRunning(stayRunning: boolean): void;
  disableCocoaScriptPreprocessor(): boolean;
  setDisableCocoaScriptPreprocessor(disableCocoaScriptPreprocessor: boolean): void;
}

declare const MSPluginCommand: {
  alloc(): MSPluginCommandUninitialized;
  class(): MSPluginCommand;
  commandWithJSON_scripts_scriptsURL(commandJSON: any, scripts: NSMutableDictionary<any, any> | {[key: string]: any}, scriptsURL: NSURL): MSPluginCommand;
  load(): void;
  instancesRespondToSelector(aSelector: string): boolean;
  conformsToProtocol(protocol: Protocol): boolean;
  instanceMethodForSelector(aSelector: string): IMP;
  isSubclassOfClass(aClass: any): boolean;
  hash(): NSUInteger;
  superclass(): any;
  description(): NSString;
  debugDescription(): NSString;
  useStoredAccessor(): boolean;
  keyPathsForValuesAffectingValueForKey(key: NSString | string): NSSet<any>;
  automaticallyNotifiesObserversForKey(key: NSString | string): boolean;
  setKeys_triggerChangeNotificationsForDependentKey(keys: NSArray<any> | any[], dependentKey: NSString | string): void;
  classFallbacksForKeyedArchiver(): NSArray<any>;
  classForKeyedUnarchiver(): any;
  version(): NSInteger;
  setVersion(aVersion: NSInteger): void;
  cancelPreviousPerformRequestsWithTarget_selector_object(aTarget: any, aSelector: string, anArgument: any | null): void;
  cancelPreviousPerformRequestsWithTarget(aTarget: any): void;
  exposeBinding(binding: NSBindingName): void;
  setDefaultPlaceholder_forMarker_withBinding(placeholder: any | null, marker: any | null, binding: NSBindingName): void;
  defaultPlaceholderForMarker_withBinding(marker: any | null, binding: NSBindingName): any;
  mo_swizzleAdditions(): void;
  mo_mocha(): MOClassDescription;
  isSelectorExcludedFromMochaScript(selector: string): boolean;
  selectorForMochaPropertyName(propertyName: NSString | string): string;
  accessInstanceVariablesDirectly(): boolean;

}

