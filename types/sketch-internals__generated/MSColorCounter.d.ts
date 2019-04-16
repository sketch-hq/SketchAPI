interface MSColorCounterUninitialized<InitializedType = MSColorCounter> extends MSObjectCounterUninitialized<MSColorCounter> {}

interface MSColorCounter extends MSObjectCounter {

  immutableColor(): MSImmutableColor;
  color(): MSColor;
  title(): NSString;
}

declare const MSColorCounter: {
  alloc(): MSColorCounterUninitialized;
  class(): MSColorCounter;
}

