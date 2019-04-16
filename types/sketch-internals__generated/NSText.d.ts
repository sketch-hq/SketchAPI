interface NSTextUninitialized<InitializedType = NSText> extends NSViewUninitialized<NSText> {}

interface NSText extends NSView, INSChangeSpelling, INSIgnoreMisspelledWords {
  replaceCharactersInRange_withString(range: NSRange, string: NSString | string): void;
  replaceCharactersInRange_withRTF(range: NSRange, rtfData: NSData): void;
  replaceCharactersInRange_withRTFD(range: NSRange, rtfdData: NSData): void;
  RTFFromRange(range: NSRange): NSData;
  RTFDFromRange(range: NSRange): NSData;
  writeRTFDToFile_atomically(path: NSString | string, flag: boolean): boolean;
  readRTFDFromFile(path: NSString | string): boolean;
  scrollRangeToVisible(range: NSRange): void;
  setTextColor_range(color: NSColor | null, range: NSRange): void;
  setFont_range(font: NSFont, range: NSRange): void;
  sizeToFit(): void;
  copy(sender: any | null): void;
  copyFont(sender: any | null): void;
  copyRuler(sender: any | null): void;
  cut(sender: any | null): void;
  delete(sender: any | null): void;
  paste(sender: any | null): void;
  pasteFont(sender: any | null): void;
  pasteRuler(sender: any | null): void;
  selectAll(sender: any | null): void;
  changeFont(sender: any | null): void;
  alignLeft(sender: any | null): void;
  alignRight(sender: any | null): void;
  alignCenter(sender: any | null): void;
  subscript(sender: any | null): void;
  superscript(sender: any | null): void;
  underline(sender: any | null): void;
  unscript(sender: any | null): void;
  showGuessPanel(sender: any | null): void;
  checkSpelling(sender: any | null): void;
  toggleRuler(sender: any | null): void;
  changeSpelling(sender: any | null): void;
  ignoreSpelling(sender: any | null): void;

  string(): NSString;
  setString(string: NSString | string): void;
  delegate(): any;
  setDelegate(delegate: any): void;
  editable(): boolean;
  setEditable(editable: boolean): void;
  selectable(): boolean;
  setSelectable(selectable: boolean): void;
  richText(): boolean;
  setRichText(richText: boolean): void;
  importsGraphics(): boolean;
  setImportsGraphics(importsGraphics: boolean): void;
  fieldEditor(): boolean;
  setFieldEditor(fieldEditor: boolean): void;
  usesFontPanel(): boolean;
  setUsesFontPanel(usesFontPanel: boolean): void;
  drawsBackground(): boolean;
  setDrawsBackground(drawsBackground: boolean): void;
  backgroundColor(): NSColor;
  setBackgroundColor(backgroundColor: NSColor): void;
  rulerVisible(): boolean;
  selectedRange(): NSRange;
  setSelectedRange(selectedRange: NSRange): void;
  font(): NSFont;
  setFont(font: NSFont): void;
  textColor(): NSColor;
  setTextColor(textColor: NSColor): void;
  alignment(): NSTextAlignment;
  setAlignment(alignment: NSTextAlignment): void;
  baseWritingDirection(): NSWritingDirection;
  setBaseWritingDirection(baseWritingDirection: NSWritingDirection): void;
  maxSize(): NSSize;
  setMaxSize(maxSize: NSSize): void;
  minSize(): NSSize;
  setMinSize(minSize: NSSize): void;
  horizontallyResizable(): boolean;
  setHorizontallyResizable(horizontallyResizable: boolean): void;
  verticallyResizable(): boolean;
  setVerticallyResizable(verticallyResizable: boolean): void;
}

declare const NSText: {
  alloc(): NSTextUninitialized;
  class(): NSText;
  requiresConstraintBasedLayout(): boolean;
  focusView(): NSView;
  defaultMenu(): NSMenu;
  compatibleWithResponsiveScrolling(): boolean;
  defaultFocusRingType(): NSFocusRingType;
  restorableStateKeyPaths(): NSArray<any>;

}

