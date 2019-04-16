interface MOBridgeSupportControllerUninitialized<InitializedType = MOBridgeSupportController> extends NSObjectUninitialized<MOBridgeSupportController> {}
interface MOBridgeSupportController extends NSObject {
  isBridgeSupportLoadedForURL(aURL: NSURL): boolean;
  loadBridgeSupportAtURL_error(aURL: NSURL, outError: NSError): boolean;
  performQueryForSymbolsOfType(classes: NSArray<any> | any[]): NSDictionary<any, any>;
  performQueryForSymbolName(name: NSString | string): any;
  performQueryForSymbolName_ofType(name: NSString | string, klass: any): any;

  symbols(): NSDictionary<any, any>;
}
declare const MOBridgeSupportController: {
  alloc(): MOBridgeSupportControllerUninitialized;
  class(): MOBridgeSupportController;  sharedController(): MOBridgeSupportController;

}

