interface INSInputServiceProvider {
  insertText_client(string: any, sender: any): void;
  doCommandBySelector_client(selector: string, sender: any): void;
  markedTextAbandoned(sender: any | null): void;
  markedTextSelectionChanged_client(newSel: NSRange, sender: any): void;
  terminate(sender: any | null): void;
  canBeDisabled(): boolean;
  wantsToInterpretAllKeystrokes(): boolean;
  wantsToHandleMouseEvents(): boolean;
  wantsToDelayTextChangeNotifications(): boolean;
  inputClientBecomeActive(sender: any | null): void;
  inputClientResignActive(sender: any | null): void;
  inputClientEnabled(sender: any | null): void;
  inputClientDisabled(sender: any | null): void;
  activeConversationWillChange_fromOldConversation(sender: any, oldConversation: NSInteger): void;
  activeConversationChanged_toNewConversation(sender: any, newConversation: NSInteger): void;
}

