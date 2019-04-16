interface MSOptionalRendererUninitialized<InitializedType = MSOptionalRenderer> extends NSObjectUninitialized<MSOptionalRenderer> {
  initWithBaseRenderer_disableSetting(baseRenderer: any, setting: NSString | string): InitializedType;
}
interface MSOptionalRenderer extends NSObject {

  baseRenderer(): any;
  enabled(): boolean;
}
declare const MSOptionalRenderer: {
  alloc(): MSOptionalRendererUninitialized;
  class(): MSOptionalRenderer;
}

