interface MSMainMenuDataActionUninitialized<InitializedType = MSMainMenuDataAction> extends MSDataMenuBaseActionUninitialized<MSMainMenuDataAction> {}

interface MSMainMenuDataAction extends MSDataMenuBaseAction {
}

declare const MSMainMenuDataAction: {
  alloc(): MSMainMenuDataActionUninitialized;
  class(): MSMainMenuDataAction;
}

