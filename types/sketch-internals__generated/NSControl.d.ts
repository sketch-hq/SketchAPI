interface NSControlUninitialized<InitializedType = NSControl> extends NSViewUninitialized<NSControl> {}

interface NSControl extends NSView {
  sizeThatFits(size: NSSize): NSSize;
  sizeToFit(): void;
  sendActionOn(mask: NSInteger): NSInteger;
  sendAction_to(action: string | null, target: any | null): boolean;
  takeIntValueFrom(sender: any | null): void;
  takeFloatValueFrom(sender: any | null): void;
  takeDoubleValueFrom(sender: any | null): void;
  takeStringValueFrom(sender: any | null): void;
  takeObjectValueFrom(sender: any | null): void;
  takeIntegerValueFrom(sender: any | null): void;
  mouseDown(event: NSEvent): void;
  performClick(sender: any | null): void;
  expansionFrameWithFrame(contentFrame: NSRect): NSRect;
  drawWithExpansionFrame_inView(contentFrame: NSRect, view: NSView): void;
  currentEditor(): NSText;
  abortEditing(): boolean;
  validateEditing(): void;
  editWithFrame_editor_delegate_event(rect: NSRect, textObj: NSText, delegate: any | null, event: NSEvent): void;
  selectWithFrame_editor_delegate_start_length(rect: NSRect, textObj: NSText, delegate: any | null, selStart: NSInteger, selLength: NSInteger): void;
  endEditing(textObj: NSText): void;
  setFloatingPointFormat_left_right(autoRange: boolean, leftDigits: NSUInteger, rightDigits: NSUInteger): void;
  selectedCell(): NSCell;
  selectedTag(): NSInteger;
  setNeedsDisplay(): void;
  calcSize(): void;
  updateCell(cell: NSCell): void;
  updateCellInside(cell: NSCell): void;
  drawCellInside(cell: NSCell): void;
  drawCell(cell: NSCell): void;
  selectCell(cell: NSCell): void;
  invalidateIntrinsicContentSizeForCell(cell: NSCell): void;

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  tag(): NSInteger;
  setTag(tag: NSInteger): void;
  ignoresMultiClick(): boolean;
  setIgnoresMultiClick(ignoresMultiClick: boolean): void;
  continuous(): boolean;
  setContinuous(continuous: boolean): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  refusesFirstResponder(): boolean;
  setRefusesFirstResponder(refusesFirstResponder: boolean): void;
  highlighted(): boolean;
  setHighlighted(highlighted: boolean): void;
  controlSize(): NSControlSize;
  setControlSize(controlSize: NSControlSize): void;
  formatter(): NSFormatter;
  setFormatter(formatter: NSFormatter): void;
  stringValue(): NSString;
  setStringValue(stringValue: NSString | string): void;
  attributedStringValue(): NSAttributedString;
  setAttributedStringValue(attributedStringValue: NSAttributedString): void;
  objectValue(): any;
  setObjectValue(objectValue: any): void;
  intValue(): number;
  setIntValue(intValue: number): void;
  integerValue(): NSInteger;
  setIntegerValue(integerValue: NSInteger): void;
  floatValue(): number;
  setFloatValue(floatValue: number): void;
  doubleValue(): number;
  setDoubleValue(doubleValue: number): void;
  alignment(): NSTextAlignment;
  setAlignment(alignment: NSTextAlignment): void;
  font(): NSFont;
  setFont(font: NSFont): void;
  lineBreakMode(): NSLineBreakMode;
  setLineBreakMode(lineBreakMode: NSLineBreakMode): void;
  usesSingleLineMode(): boolean;
  setUsesSingleLineMode(usesSingleLineMode: boolean): void;
  baseWritingDirection(): NSWritingDirection;
  setBaseWritingDirection(baseWritingDirection: NSWritingDirection): void;
  allowsExpansionToolTips(): boolean;
  setAllowsExpansionToolTips(allowsExpansionToolTips: boolean): void;
  cell(): NSCell;
  setCell(cell: NSCell): void;
}

declare const NSControl: {
  alloc(): NSControlUninitialized;
  class(): NSControl;
  inpectorBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorCheckmarkBorderPathForRect(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRectWithMaxRadius(rect: NSRect): NSBezierPath;
  inpectorBorderPathForRect_borderRadius(rect: NSRect, borderRadius: CGFloat): NSBezierPath;
  inpectorFocusRingPathForRect(rect: NSRect): NSBezierPath;
  cellClass(): any;,
          {
            newLineStart: true,
            newLineEnd: false,
          }
  setCellClass(cellClass: any): void;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

