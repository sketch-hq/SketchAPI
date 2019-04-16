interface IMSColorInspectorDelegate {
  colorInspector_didChangeToColor(inspector: MSColorInspector, color: MSColor): void;
  inspectorDidChangeType(inspector: MSColorInspector): void;
  colorInspectorDidChange(inspector: MSColorInspector): void;
  colorInspectorWillClose(inspector: MSColorInspector): void;
  colorInspectorShouldAdjustInspectorToPopover(inspector: MSColorInspector): boolean;
  colorInspectorUndoManager(inspector: MSColorInspector): NSUndoManager;
}

