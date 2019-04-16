interface BCSTListCommandUninitialized<InitializedType = BCSTListCommand> extends BCSTCommandUninitialized<BCSTListCommand> {}

interface BCSTListCommand extends BCSTCommand {
  itemsName(): NSString;
  itemsToListFromPages_engine(pages: NSArray<any> | any[], engine: ECCommandLineEngine): NSArray<any>;
  itemsToListFromPage_engine(page: MSPage, engine: ECCommandLineEngine): NSArray<any>;
  infoForPage_engine(page: MSPage, engine: ECCommandLineEngine): any;
  infoForItem_engine(item: any, engine: ECCommandLineEngine): NSDictionary<any, any>;
  safeName(name: NSString | string): NSString;
  rectDictionary(rect: NSRect): NSDictionary<any, any>;
  supportedFormats(): NSArray<any>;
}

declare const BCSTListCommand: {
  alloc(): BCSTListCommandUninitialized;
  class(): BCSTListCommand;
  accessInstanceVariablesDirectly(): boolean;

}

