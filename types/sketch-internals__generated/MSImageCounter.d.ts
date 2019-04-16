interface MSImageCounterUninitialized<InitializedType = MSImageCounter> extends MSObjectCounterUninitialized<MSImageCounter> {}

interface MSImageCounter extends MSObjectCounter {

  imageData(): MSImageData;
  title(): NSString;
  sizeString(): NSString;
}

declare const MSImageCounter: {
  alloc(): MSImageCounterUninitialized;
  class(): MSImageCounter;
}

