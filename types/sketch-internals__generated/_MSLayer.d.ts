interface _MSLayerUninitialized<InitializedType = _MSLayer> extends MSModelObjectUninitialized<_MSLayer> {}
interface _MSLayer extends MSModelObject {

  booleanOperation(): MSBooleanOperation;
  setBooleanOperation(booleanOperation: MSBooleanOperation): void;
  isFixedToViewport(): boolean;
  setIsFixedToViewport(isFixedToViewport: boolean): void;
  isFlippedHorizontal(): boolean;
  setIsFlippedHorizontal(isFlippedHorizontal: boolean): void;
  isFlippedVertical(): boolean;
  setIsFlippedVertical(isFlippedVertical: boolean): void;
  isLocked(): boolean;
  setIsLocked(isLocked: boolean): void;
  isVisible(): boolean;
  setIsVisible(isVisible: boolean): void;
  layerListExpandedType(): MSLayerListStatus;
  setLayerListExpandedType(layerListExpandedType: MSLayerListStatus): void;
  name(): NSString;
  setName(name: NSString | string): void;
  nameIsFixed(): boolean;
  setNameIsFixed(nameIsFixed: boolean): void;
  originalObjectID(): NSString;
  setOriginalObjectID(originalObjectID: NSString | string): void;
  resizingConstraint(): BCConstraint;
  setResizingConstraint(resizingConstraint: BCConstraint): void;
  resizingType(): MSLayerResizingType;
  setResizingType(resizingType: MSLayerResizingType): void;
  rotation(): CGFloat;
  setRotation(rotation: CGFloat): void;
  shouldBreakMaskChain(): boolean;
  setShouldBreakMaskChain(shouldBreakMaskChain: boolean): void;
  userInfo(): NSDictionary<any, any>;
  setUserInfo(userInfo: NSDictionary<any, any> | {[key: string]: any}): void;
  exportOptions(): MSExportOptions;
  setExportOptions(exportOptions: MSExportOptions): void;
  flow(): MSFlowConnection;
  setFlow(flow: MSFlowConnection): void;
  frame(): MSRect;
  setFrame(frame: MSRect): void;
}
declare const _MSLayer: {
  alloc(): _MSLayerUninitialized;
  class(): _MSLayer;
}

