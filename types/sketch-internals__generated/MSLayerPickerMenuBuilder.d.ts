interface MSLayerPickerMenuBuilderUninitialized<InitializedType = MSLayerPickerMenuBuilder> extends MSMenuBuilderUninitialized<MSLayerPickerMenuBuilder> {}

interface MSLayerPickerMenuBuilder extends MSMenuBuilder {
  layerPickerMenuItemForPage_atPoint(page: MSPage, mouse: NSPoint): NSMenuItem;
}

declare const MSLayerPickerMenuBuilder: {
  alloc(): MSLayerPickerMenuBuilderUninitialized;
  class(): MSLayerPickerMenuBuilder;
  menuBuilderWithTarget(target: any): any;
  menuBuilderWithTarget_action(target: any, action: string): any;
}

