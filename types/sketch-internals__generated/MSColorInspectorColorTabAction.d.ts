interface MSColorInspectorColorTabActionUninitialized<InitializedType = MSColorInspectorColorTabAction> extends MSColorInspectorModePickerActionUninitialized<MSColorInspectorColorTabAction> {}
interface MSColorInspectorColorTabAction extends MSColorInspectorModePickerAction {
}
declare const MSColorInspectorColorTabAction: {
  alloc(): MSColorInspectorColorTabActionUninitialized;
  class(): MSColorInspectorColorTabAction;
}

