interface MSSelectVectorHandleGestureRecognizerUninitialized<InitializedType = MSSelectVectorHandleGestureRecognizer> extends MSGestureRecognizerUninitialized<MSSelectVectorHandleGestureRecognizer> {}

interface MSSelectVectorHandleGestureRecognizer extends MSGestureRecognizer {

  toggleSelection(): boolean;
  modifierFlags(): NSEventModifierFlags;
  delegate(): any;
  setDelegate(delegate: any): void;
}

declare const MSSelectVectorHandleGestureRecognizer: {
  alloc(): MSSelectVectorHandleGestureRecognizerUninitialized;
  class(): MSSelectVectorHandleGestureRecognizer;
  accessInstanceVariablesDirectly(): boolean;

}

