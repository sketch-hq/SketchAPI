interface MSGradientPointArrayUninitialized<InitializedType = MSGradientPointArray> extends MSPointArrayUninitialized<MSGradientPointArray> {}
interface MSGradientPointArray extends MSPointArray {

  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSGradientPointArray: {
  alloc(): MSGradientPointArrayUninitialized;
  class(): MSGradientPointArray;
}

