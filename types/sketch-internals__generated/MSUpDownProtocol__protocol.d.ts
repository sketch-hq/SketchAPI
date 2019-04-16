interface IMSUpDownProtocol {
  incrementValue(): CGFloat;
  minimum(): NSNumber;
  maximum(): NSNumber;

  upDownController(): MSUpDownController;
  minimumIncrementValue(): CGFloat;
  setMinimumIncrementValue(minimumIncrementValue: CGFloat): void;
}

