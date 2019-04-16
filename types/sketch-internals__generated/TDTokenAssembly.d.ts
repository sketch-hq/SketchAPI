interface TDTokenAssemblyUninitialized<InitializedType = TDTokenAssembly> extends TDAssemblyUninitialized<TDTokenAssembly> {
  initWithTokenzier(t: TDTokenizer): InitializedType;
  initWithTokenArray(a: NSArray<any> | any[]): InitializedType;
}

interface TDTokenAssembly extends TDAssembly, INSCopying {
  copyWithZone(zone: NSZone | null): any;

  preservesWhitespaceTokens(): boolean;
  setPreservesWhitespaceTokens(preservesWhitespaceTokens: boolean): void;
}

declare const TDTokenAssembly: {
  alloc(): TDTokenAssemblyUninitialized;
  class(): TDTokenAssembly;
  assemblyWithTokenizer(t: TDTokenizer): any;
  assemblyWithTokenArray(a: NSArray<any> | any[]): any;
  assemblyWithString(s: NSString | string): any;
  accessInstanceVariablesDirectly(): boolean;

}

