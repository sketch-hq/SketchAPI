interface INSDatePickerCellDelegate {
  datePickerCell_validateProposedDateValue_timeInterval(datePickerCell: NSDatePickerCell, proposedDateValue: MOPointer<NSDate>, proposedTimeInterval: NSTimeInterval | null): void;
}

