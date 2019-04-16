interface IMSPluginLogAction {
  log_from(value: NSDictionary<any, any> | {[key: string]: any}, sender: NSString | string): void;
  clearLogFor(sender: NSString | string): void;
  logStringFor(sender: NSString | string): NSString;
}

