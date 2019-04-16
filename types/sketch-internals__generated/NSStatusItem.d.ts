interface NSStatusItemUninitialized<InitializedType = NSStatusItem> extends NSObjectUninitialized<NSStatusItem> {}
interface NSStatusItem extends NSObject {
  sendActionOn(mask: NSInteger): NSInteger;
  drawStatusBarBackgroundInRect_withHighlight(rect: NSRect, highlight: boolean): void;
  popUpStatusItemMenu(menu: NSMenu): void;

  statusBar(): NSStatusBar;
  length(): CGFloat;
  setLength(length: CGFloat): void;
  menu(): NSMenu;
  setMenu(menu: NSMenu): void;
  button(): NSStatusBarButton;
  behavior(): NSStatusItemBehavior;
  setBehavior(behavior: NSStatusItemBehavior): void;
  visible(): boolean;
  setVisible(visible: boolean): void;
  autosaveName(): NSStatusItemAutosaveName;
  setAutosaveName(autosaveName: NSStatusItemAutosaveName): void;
  action(): string;
  setAction(action: string): void;
  doubleAction(): string;
  setDoubleAction(doubleAction: string): void;
  target(): any;
  setTarget(target: any): void;
  title(): NSString;
  setTitle(title: NSString | string): void;
  attributedTitle(): NSAttributedString;
  setAttributedTitle(attributedTitle: NSAttributedString): void;
  image(): NSImage;
  setImage(image: NSImage): void;
  alternateImage(): NSImage;
  setAlternateImage(alternateImage: NSImage): void;
  enabled(): boolean;
  setEnabled(enabled: boolean): void;
  highlightMode(): boolean;
  setHighlightMode(highlightMode: boolean): void;
  toolTip(): NSString;
  setToolTip(toolTip: NSString | string): void;
  view(): NSView;
  setView(view: NSView): void;
}
declare const NSStatusItem: {
  alloc(): NSStatusItemUninitialized;
  class(): NSStatusItem;
}

