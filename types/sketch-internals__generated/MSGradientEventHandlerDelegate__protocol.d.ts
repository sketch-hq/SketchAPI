interface IMSGradientEventHandlerDelegate {
  gradientHandlerDidChangeCurrentPoint(handler: MSGradientEventHandler): void;
  gradientHandlerDidChangeGradient(handler: MSGradientEventHandler): void;
  gradientHandlerWillLoseFocus(handler: MSGradientEventHandler): void;
}

