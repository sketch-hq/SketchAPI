interface TDCharacterAssemblyUninitialized<InitializedType = TDCharacterAssembly> extends TDAssemblyUninitialized<TDCharacterAssembly> {}
interface TDCharacterAssembly extends TDAssembly {
}
declare const TDCharacterAssembly: {
  alloc(): TDCharacterAssemblyUninitialized;
  class(): TDCharacterAssembly;
}

