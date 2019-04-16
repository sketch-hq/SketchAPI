interface TDSymbolNodeUninitialized<InitializedType = TDSymbolNode> extends NSObjectUninitialized<TDSymbolNode> {
  initWithParent_character(p: TDSymbolNode, c: NSInteger): InitializedType;
}
interface TDSymbolNode extends NSObject {

  ancestry(): NSString;
}
declare const TDSymbolNode: {
  alloc(): TDSymbolNodeUninitialized;
  class(): TDSymbolNode;
}

