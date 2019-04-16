interface MSInspectorPushButtonCellUninitialized<InitializedType = MSInspectorPushButtonCell> extends NSButtonCellUninitialized<MSInspectorPushButtonCell> {}
interface MSInspectorPushButtonCell extends NSButtonCell {

  fakeReturnButtonLook(): boolean;
  setFakeReturnButtonLook(fakeReturnButtonLook: boolean): void;
}
declare const MSInspectorPushButtonCell: {
  alloc(): MSInspectorPushButtonCellUninitialized;
  class(): MSInspectorPushButtonCell;
}

