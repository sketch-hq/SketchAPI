interface MSNormalEventContextualMenuBuilderUninitialized<InitializedType = MSNormalEventContextualMenuBuilder> extends NSObjectUninitialized<MSNormalEventContextualMenuBuilder> {}
interface MSNormalEventContextualMenuBuilder extends NSObject {
  menuForLayers_inContext(layers: NSArray<any> | any[], context: MSContextualMenuBuilderContext): NSMenu;
}
declare const MSNormalEventContextualMenuBuilder: {
  alloc(): MSNormalEventContextualMenuBuilderUninitialized;
  class(): MSNormalEventContextualMenuBuilder;
}

