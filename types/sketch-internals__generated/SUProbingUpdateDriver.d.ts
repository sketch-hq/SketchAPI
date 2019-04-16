interface SUProbingUpdateDriverUninitialized<InitializedType = SUProbingUpdateDriver> extends SUBasicUpdateDriverUninitialized<SUProbingUpdateDriver> {}

interface SUProbingUpdateDriver extends SUBasicUpdateDriver {
}

declare const SUProbingUpdateDriver: {
  alloc(): SUProbingUpdateDriverUninitialized;
  class(): SUProbingUpdateDriver;
  hostSupportsItem(ui: SUAppcastItem): boolean;
  bestItemFromAppcastItems_getDeltaItem_withHostVersion_comparator(appcastItems: NSArray<any> | any[], deltaItem: SUAppcastItem, hostVersion: NSString | string, comparator: any): SUAppcastItem;
}

