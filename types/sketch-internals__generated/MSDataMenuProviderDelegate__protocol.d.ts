interface IMSDataMenuProviderDelegate {
  refreshDataOnCurrentSelection(sender: any): IBAction;
  applyDataToCurrentSelection(sender: any): IBAction;
  applyDataToCurrentSelectionRoot(sender: any): IBAction;
  clearDataRecordFromCurrentSelection(sender: any): IBAction;

  overrideItemForInspector(): MSAvailableOverride;
  setOverrideItemForInspector(overrideItemForInspector: MSAvailableOverride): void;
}

