interface MSOverrideRepresentationUninitialized<InitializedType = MSOverrideRepresentation> extends MSOverrideRepresentationBaseUninitialized<MSOverrideRepresentation> {}
interface MSOverrideRepresentation extends MSOverrideRepresentationBase {
  copyAffectedLayerForPasteboard(): MSLayer;
  updateExpandedStateAfterSelection(): void;
  createOverrideViewController(): MSOverrideInspectorItem;
  overrideViewControllerHeightWithLayers_shouldShowLabel_indentationLevel(layers: MSLayerArray, shouldShowLabel: boolean, indentationLevel: NSUInteger): CGFloat;

  availableOverride(): MSAvailableOverride;
  parent(): MSOverrideRepresentationBase;
  previousSibling(): MSOverrideRepresentation;
  pathInInstance(): CGPathRef;
  layerListExpandedType(): MSLayerListStatus;
  setLayerListExpandedType(layerListExpandedType: MSLayerListStatus): void;
  isEditable(): boolean;
  selectionID(): NSString;
  isSelected(): boolean;
  isAtRootLevel(): boolean;
}
declare const MSOverrideRepresentation: {
  alloc(): MSOverrideRepresentationUninitialized;
  class(): MSOverrideRepresentation;
}

