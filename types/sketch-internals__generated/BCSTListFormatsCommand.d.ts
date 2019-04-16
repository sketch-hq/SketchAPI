interface BCSTListFormatsCommandUninitialized<InitializedType = BCSTListFormatsCommand> extends BCSTListCommandUninitialized<BCSTListFormatsCommand> {}

interface BCSTListFormatsCommand extends BCSTListCommand {
}

declare const BCSTListFormatsCommand: {
  alloc(): BCSTListFormatsCommandUninitialized;
  class(): BCSTListFormatsCommand;
  accessInstanceVariablesDirectly(): boolean;

}

