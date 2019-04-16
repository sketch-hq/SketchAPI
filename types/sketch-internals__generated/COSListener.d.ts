interface COSListenerUninitialized<InitializedType = COSListener> extends NSObjectUninitialized<COSListener> {}
interface COSListener extends NSObject {

  rootObject(): any;
  setRootObject(rootObject: any): void;
}
declare const COSListener: {
  alloc(): COSListenerUninitialized;
  class(): COSListener;  sharedListener(): COSListener;
  listen(): void;
  listenWithRootObject(rootObject: any): void;

}

