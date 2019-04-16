interface MSLayoutAnchorUninitialized<InitializedType = MSLayoutAnchor> extends NSObjectUninitialized<MSLayoutAnchor> {
  initWithItem_attribute(item: any, attribute: MSLayoutAttribute): InitializedType;
}
interface MSLayoutAnchor extends NSObject {

  item(): any;
  attribute(): MSLayoutAttribute;
  axis(): BCAxis;
}
declare const MSLayoutAnchor: {
  alloc(): MSLayoutAnchorUninitialized;
  class(): MSLayoutAnchor;
}

