interface NSPositionalSpecifierUninitialized<InitializedType = NSPositionalSpecifier> extends NSObjectUninitialized<NSPositionalSpecifier> {
  initWithPosition_objectSpecifier(position: NSInsertionPosition, specifier: NSScriptObjectSpecifier): InitializedType;
}
interface NSPositionalSpecifier extends NSObject {
  setInsertionClassDescription(classDescription: NSScriptClassDescription): void;
  evaluate(): void;

  position(): NSInsertionPosition;
  objectSpecifier(): NSScriptObjectSpecifier;
  insertionContainer(): any;
  insertionKey(): NSString;
  insertionIndex(): NSInteger;
  insertionReplaces(): boolean;
}
declare const NSPositionalSpecifier: {
  alloc(): NSPositionalSpecifierUninitialized;
  class(): NSPositionalSpecifier;
}

