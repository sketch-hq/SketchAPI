interface MSMultipleStylePartInspectorViewControllerUninitialized<InitializedType = MSMultipleStylePartInspectorViewController> extends NSViewControllerUninitialized<MSMultipleStylePartInspectorViewController> {}

interface MSMultipleStylePartInspectorViewController extends NSViewController, IMSReorderingContainerDelegate {
  prepare(): void;
  prepareForReuse(): void;
  stylePartType(): MSStylePartType;
  rotatedStyleParts(): NSArray<any>;
  addStylePartAction(sender: any): IBAction;
  deleteStylePartAction(sender: any): IBAction;
  deleteUnusedStylePartsAction(sender: any): IBAction;
  addStylePartsForSelection(): NSArray<any>;
  hasEnabledStyle(): boolean;
  prepareInspector_parts_index(inspector: MSStylePartInspectorViewController, styleParts: NSArray<any> | any[], index: NSUInteger): void;
  loadViewControllers(): void;
  validateSpecialButtons(): void;
  validateRemoveDisabledStylesButton(): void;
  resizeViewToFit(): void;
  styleDidEnableOrDisable(): void;
  inspectorForStyleParts_atIndex(styleParts: NSArray<any> | any[], index: NSUInteger): any;
  shouldShowAdvancedOptionsButton(): boolean;
  lastEnabledStylePartController(): MSStylePartInspectorViewController;
  updateDisplayedValues(): void;
  containerBackground_dragDidReorderChildAtIndex_toIndex(backgroundView: MSReorderingContainerView, fromIndex: NSUInteger, toIndex: NSUInteger): void;
  startingOffsetForStackingContainerBackground(backgroundView: MSReorderingContainerView): CGFloat;
  numberOfReorderableSubviewsForContainerBackground(backgroundView: MSReorderingContainerView): NSUInteger;

  layers(): NSArray<any>;
  setLayers(layers: NSArray<any> | any[]): void;
  stylePartViewControllers(): NSArray<any>;
  setStylePartViewControllers(stylePartViewControllers: NSArray<any> | any[]): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  reorderingContainer(): MSReorderingContainerView;
  setReorderingContainer(reorderingContainer: MSReorderingContainerView): void;
  nameView(): NSView;
  setNameView(nameView: NSView): void;
  removeDisabledStylesButton(): NSButton;
  setRemoveDisabledStylesButton(removeDisabledStylesButton: NSButton): void;
  showAdvancedOptionsButton(): NSButton;
  setShowAdvancedOptionsButton(showAdvancedOptionsButton: NSButton): void;
  headerButton(): NSButton;
  setHeaderButton(headerButton: NSButton): void;
}

declare const MSMultipleStylePartInspectorViewController: {
  alloc(): MSMultipleStylePartInspectorViewControllerUninitialized;
  class(): MSMultipleStylePartInspectorViewController;
  restorableStateKeyPaths(): NSArray<any>;
  accessInstanceVariablesDirectly(): boolean;

}

