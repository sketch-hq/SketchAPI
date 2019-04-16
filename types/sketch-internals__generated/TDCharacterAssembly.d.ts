interface TDCharacterAssemblyUninitialized<InitializedType = TDCharacterAssembly> extends TDAssemblyUninitialized<TDCharacterAssembly> {}

interface TDCharacterAssembly extends TDAssembly {
}

declare const TDCharacterAssembly: {
  alloc(): TDCharacterAssemblyUninitialized;
  class(): TDCharacterAssembly;
  assemblyWithString(s: NSString | string): any;
  accessInstanceVariablesDirectly(): boolean;

}

