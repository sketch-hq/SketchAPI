interface MSSharedStyleUninitialized<InitializedType = MSSharedStyle> extends _MSSharedStyleUninitialized<MSSharedStyle> {
  initWithName_style(name: NSString | string, style: MSStyle): InitializedType;
}

interface MSSharedStyle extends _MSSharedStyle {

  allInstances: () => MSStyle[]
  allLayersInstances: () => MSStyledLayer[]
  resetReferencingInstances(): void;

  style(): MSStyle;
}

declare const MSSharedStyle: {
  alloc(): MSSharedStyleUninitialized;
  class(): MSSharedStyle;
}

