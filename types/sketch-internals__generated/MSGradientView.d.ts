interface MSGradientViewUninitialized<InitializedType = MSGradientView> extends NSViewUninitialized<MSGradientView> {}
interface MSGradientView extends NSView {

  topColour(): NSColor;
  setTopColour(topColour: NSColor): void;
  bottomColour(): NSColor;
  setBottomColour(bottomColour: NSColor): void;
  borderColour(): NSColor;
  setBorderColour(borderColour: NSColor): void;
  gradientAngle(): number;
  setGradientAngle(gradientAngle: number): void;
  borderSize(): number;
  setBorderSize(borderSize: number): void;
  topBorder(): boolean;
  setTopBorder(topBorder: boolean): void;
  leftBorder(): boolean;
  setLeftBorder(leftBorder: boolean): void;
  rightBorder(): boolean;
  setRightBorder(rightBorder: boolean): void;
  bottomBorder(): boolean;
  setBottomBorder(bottomBorder: boolean): void;
}
declare const MSGradientView: {
  alloc(): MSGradientViewUninitialized;
  class(): MSGradientView;
}

