interface MSRotationBarUninitialized<InitializedType = MSRotationBar> extends NSControlUninitialized<MSRotationBar> {}
interface MSRotationBar extends NSControl {

  layers(): NSArray<any>;
  setLayers(layers: NSArray<any> | any[]): void;
  delegate(): any;
  setDelegate(delegate: any): void;
}
declare const MSRotationBar: {
  alloc(): MSRotationBarUninitialized;
  class(): MSRotationBar;
}

