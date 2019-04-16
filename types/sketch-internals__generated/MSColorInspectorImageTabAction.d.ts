interface MSColorInspectorImageTabActionUninitialized<InitializedType = MSColorInspectorImageTabAction> extends MSColorInspectorModePickerActionUninitialized<MSColorInspectorImageTabAction> {}

interface MSColorInspectorImageTabAction extends MSColorInspectorModePickerAction {
}

declare const MSColorInspectorImageTabAction: {
  alloc(): MSColorInspectorImageTabActionUninitialized;
  class(): MSColorInspectorImageTabAction;
}

