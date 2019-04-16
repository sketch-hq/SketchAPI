interface BCKeyEventActionTableViewUninitialized<InitializedType = BCKeyEventActionTableView> extends NSTableViewUninitialized<BCKeyEventActionTableView> {}
interface BCKeyEventActionTableView extends NSTableView {
  setTarget_action_forKeyDownEventWithCharacters(target: any, action: string, characters: NSString | string): void;
}
declare const BCKeyEventActionTableView: {
  alloc(): BCKeyEventActionTableViewUninitialized;
  class(): BCKeyEventActionTableView;
}

