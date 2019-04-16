interface TDScientificNumberStateUninitialized<InitializedType = TDScientificNumberState> extends TDNumberStateUninitialized<TDScientificNumberState> {}

interface TDScientificNumberState extends TDNumberState {
}

declare const TDScientificNumberState: {
  alloc(): TDScientificNumberStateUninitialized;
  class(): TDScientificNumberState;
}

