interface BCTableRowViewUninitialized<InitializedType = BCTableRowView> extends NSTableRowViewUninitialized<BCTableRowView> {}
interface BCTableRowView extends NSTableRowView {
  refreshSelectionState(): void;
  refreshBadges(): void;
  refreshBackgroundStyle(): void;
  relayoutNow(): void;

  nodeSelected(): boolean;
  nodeExpanded(): boolean;
  highlighted(): boolean;
  didLastDisplayAsHighlighted(): boolean;
  setDidLastDisplayAsHighlighted(didLastDisplayAsHighlighted: boolean): void;
  backgroundStyle(): NSBackgroundStyle;
  tableCellView(): BCTableCellView;
  node(): NSObject;
  setNode(node: NSObject): void;
  delegate(): NSObject;
  setDelegate(delegate: NSObject): void;
  displayType(): BCOutlineViewDisplayType;
  expansionState(): BCOutlineViewNodeExpansionState;
  setExpansionState(expansionState: BCOutlineViewNodeExpansionState): void;
  expansionTransitionState(): BCTableRowViewExpansionTransitionState;
  setExpansionTransitionState(expansionTransitionState: BCTableRowViewExpansionTransitionState): void;
  isCurrentlyCollapsing(): boolean;
  isCurrentlyExpanding(): boolean;
  outlineView(): BCOutlineView;
  drawsTopBorder(): boolean;
  drawsBottomBorder(): boolean;
  hasBottomPaddingApplied(): boolean;
  hasTopPaddingApplied(): boolean;
  isInActiveOutlineView(): boolean;
  shouldDisplayAsHighlighted(): boolean;
  isNodeSelected(): boolean;
  isNodeSubselected(): boolean;
  isPreviousNodeSelected(): boolean;
  isNextNodeSelected(): boolean;
}
declare const BCTableRowView: {
  alloc(): BCTableRowViewUninitialized;
  class(): BCTableRowView;
}

