interface SUAutomaticUpdateDriverUninitialized<InitializedType = SUAutomaticUpdateDriver> extends SUBasicUpdateDriverUninitialized<SUAutomaticUpdateDriver> {}

interface SUAutomaticUpdateDriver extends SUBasicUpdateDriver {
}

declare const SUAutomaticUpdateDriver: {
  alloc(): SUAutomaticUpdateDriverUninitialized;
  class(): SUAutomaticUpdateDriver;
  hostSupportsItem(ui: SUAppcastItem): boolean;
  bestItemFromAppcastItems_getDeltaItem_withHostVersion_comparator(appcastItems: NSArray<any> | any[], deltaItem: MOPointer<SUAppcastItem>, hostVersion: NSString | string, comparator: any): SUAppcastItem;
}

