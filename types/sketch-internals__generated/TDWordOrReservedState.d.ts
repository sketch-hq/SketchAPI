interface TDWordOrReservedStateUninitialized<InitializedType = TDWordOrReservedState> extends TDWordStateUninitialized<TDWordOrReservedState> {}
interface TDWordOrReservedState extends TDWordState {
  addReservedWord(s: NSString | string): void;
}
declare const TDWordOrReservedState: {
  alloc(): TDWordOrReservedStateUninitialized;
  class(): TDWordOrReservedState;
}

