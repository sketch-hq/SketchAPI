interface INSUserInterfaceItemSearching {
  searchForItemsWithSearchString_resultLimit_matchedItemHandler(searchString: NSString | string, resultLimit: NSInteger, handleMatchedItems: Block): void;
  localizedTitlesForItem(item: any): NSArray<any>;
  performActionForItem(item: any): void;
  showAllHelpTopicsForSearchString(searchString: NSString | string): void;
}

