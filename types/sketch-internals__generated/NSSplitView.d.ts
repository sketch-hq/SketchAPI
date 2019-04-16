interface NSSplitViewUninitialized<InitializedType = NSSplitView> extends NSViewUninitialized<NSSplitView> {}
interface NSSplitView extends NSView {
  drawDividerInRect(rect: NSRect): void;
  adjustSubviews(): void;
  isSubviewCollapsed(subview: NSView): boolean;
  minPossiblePositionOfDividerAtIndex(dividerIndex: NSInteger): CGFloat;
  maxPossiblePositionOfDividerAtIndex(dividerIndex: NSInteger): CGFloat;
  setPosition_ofDividerAtIndex(position: CGFloat, dividerIndex: NSInteger): void;
  holdingPriorityForSubviewAtIndex(subviewIndex: NSInteger): NSLayoutPriority;
  setHoldingPriority_forSubviewAtIndex(priority: NSLayoutPriority, subviewIndex: NSInteger): void;
  addArrangedSubview(view: NSView): void;
  insertArrangedSubview_atIndex(view: NSView, index: NSInteger): void;
  removeArrangedSubview(view: NSView): void;
  setIsPaneSplitter(flag: boolean): void;
  isPaneSplitter(): boolean;

  vertical(): boolean;
  setVertical(vertical: boolean): void;
  dividerStyle(): NSSplitViewDividerStyle;
  setDividerStyle(dividerStyle: NSSplitViewDividerStyle): void;
  autosaveName(): NSSplitViewAutosaveName;
  setAutosaveName(autosaveName: NSSplitViewAutosaveName): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  dividerColor(): NSColor;
  dividerThickness(): CGFloat;
  arrangesAllSubviews(): boolean;
  setArrangesAllSubviews(arrangesAllSubviews: boolean): void;
  arrangedSubviews(): NSArray<any>;
}
declare const NSSplitView: {
  alloc(): NSSplitViewUninitialized;
  class(): NSSplitView;
}

