interface INSComboBoxDelegate {
  comboBoxWillPopUp(notification: NSNotification): void;
  comboBoxWillDismiss(notification: NSNotification): void;
  comboBoxSelectionDidChange(notification: NSNotification): void;
  comboBoxSelectionIsChanging(notification: NSNotification): void;
}

