interface MSInspectorHeaderLabelButtonCellUninitialized<InitializedType = MSInspectorHeaderLabelButtonCell> extends MSInspectorTweakedTextRectPopUpButtonCellUninitialized<MSInspectorHeaderLabelButtonCell> {}

interface MSInspectorHeaderLabelButtonCell extends MSInspectorTweakedTextRectPopUpButtonCell {
}

declare const MSInspectorHeaderLabelButtonCell: {
  alloc(): MSInspectorHeaderLabelButtonCellUninitialized;
  class(): MSInspectorHeaderLabelButtonCell;
}

