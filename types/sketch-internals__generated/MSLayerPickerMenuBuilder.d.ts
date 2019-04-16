interface MSLayerPickerMenuBuilderUninitialized<InitializedType = MSLayerPickerMenuBuilder> extends MSMenuBuilderUninitialized<MSLayerPickerMenuBuilder> {}
interface MSLayerPickerMenuBuilder extends MSMenuBuilder {
  layerPickerMenuItemForPage_atPoint(page: MSPage, mouse: NSPoint): NSMenuItem;
}
declare const MSLayerPickerMenuBuilder: {
  alloc(): MSLayerPickerMenuBuilderUninitialized;
  class(): MSLayerPickerMenuBuilder;
}

