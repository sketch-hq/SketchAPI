interface JSTPSymbolGroupUninitialized<InitializedType = JSTPSymbolGroup> extends NSObjectUninitialized<JSTPSymbolGroup> {}
interface JSTPSymbolGroup extends NSObject {
  addSymbol(aSymbol: any): void;

  args(): NSMutableArray<any>;
  setArgs(args: NSMutableArray<any> | any[]): void;
  parent(): JSTPSymbolGroup;
  setParent(parent: JSTPSymbolGroup): void;
}
declare const JSTPSymbolGroup: {
  alloc(): JSTPSymbolGroupUninitialized;
  class(): JSTPSymbolGroup;
}

