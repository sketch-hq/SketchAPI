interface NSActionCellUninitialized<InitializedType = NSActionCell> extends NSCellUninitialized<NSActionCell> {}
interface NSActionCell extends NSCell {

  target(): any;
  setTarget(target: any): void;
  action(): string;
  setAction(action: string): void;
  tag(): NSInteger;
  setTag(tag: NSInteger): void;
}
declare const NSActionCell: {
  alloc(): NSActionCellUninitialized;
  class(): NSActionCell;
}

