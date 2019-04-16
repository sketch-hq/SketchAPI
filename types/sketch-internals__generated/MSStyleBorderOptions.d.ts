interface MSStyleBorderOptionsUninitialized<InitializedType = MSStyleBorderOptions> extends _MSStyleBorderOptionsUninitialized<MSStyleBorderOptions> {}

interface MSStyleBorderOptions extends _MSStyleBorderOptions {

  hasDashPattern(): boolean;
}

declare const MSStyleBorderOptions: {
  alloc(): MSStyleBorderOptionsUninitialized;
  class(): MSStyleBorderOptions;
}

