interface SUUpdatePermissionPromptUninitialized<InitializedType = SUUpdatePermissionPrompt> extends NSWindowControllerUninitialized<SUUpdatePermissionPrompt> {}
interface SUUpdatePermissionPrompt extends NSWindowController {
  toggleMoreInfo(sender: any): IBAction;
  finishPrompt(sender: NSButton): IBAction;
}
declare const SUUpdatePermissionPrompt: {
  alloc(): SUUpdatePermissionPromptUninitialized;
  class(): SUUpdatePermissionPrompt;  promptWithHost_systemProfile_reply(host: SUHost, profile: NSArray<any> | any[], reply: Block): void;

}

