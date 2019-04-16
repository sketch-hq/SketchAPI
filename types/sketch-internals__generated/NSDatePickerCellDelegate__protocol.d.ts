interface INSDatePickerCellDelegate {
  datePickerCell_validateProposedDateValue_timeInterval(datePickerCell: NSDatePickerCell, proposedDateValue: NSDate, proposedTimeInterval: NSTimeInterval | null): void;
}

