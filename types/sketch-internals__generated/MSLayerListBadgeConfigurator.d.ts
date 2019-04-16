interface MSLayerListBadgeConfiguratorUninitialized<InitializedType = MSLayerListBadgeConfigurator> extends NSObjectUninitialized<MSLayerListBadgeConfigurator> {}
interface MSLayerListBadgeConfigurator extends NSObject, IBCOutlineViewPopupConfigurator {
}
declare const MSLayerListBadgeConfigurator: {
  alloc(): MSLayerListBadgeConfiguratorUninitialized;
  class(): MSLayerListBadgeConfigurator;  configuratorWithLayer(layer: MSLayer): MSLayerListBadgeConfigurator;

}

