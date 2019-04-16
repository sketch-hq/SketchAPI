interface TDSymbolRootNodeUninitialized<InitializedType = TDSymbolRootNode> extends TDSymbolNodeUninitialized<TDSymbolRootNode> {}

interface TDSymbolRootNode extends TDSymbolNode {
  add(s: NSString | string): void;
  remove(s: NSString | string): void;
  nextSymbol_startingWith(r: TDReader, cin: NSInteger): NSString;
}

declare const TDSymbolRootNode: {
  alloc(): TDSymbolRootNodeUninitialized;
  class(): TDSymbolRootNode;
  accessInstanceVariablesDirectly(): boolean;

}

