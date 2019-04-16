interface INSDecimalNumberBehaviors {
  roundingMode(): NSRoundingMode;
  scale(): number;
  exceptionDuringOperation_error_leftOperand_rightOperand(operation: string, error: NSCalculationError, leftOperand: NSDecimalNumber, rightOperand: NSDecimalNumber | null): NSDecimalNumber;
}

