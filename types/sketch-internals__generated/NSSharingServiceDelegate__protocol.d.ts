interface INSSharingServiceDelegate {
  sharingService_willShareItems(sharingService: NSSharingService, items: NSArray<any> | any[]): void;
  sharingService_didFailToShareItems_error(sharingService: NSSharingService, items: NSArray<any> | any[], error: NSError): void;
  sharingService_didShareItems(sharingService: NSSharingService, items: NSArray<any> | any[]): void;
  sharingService_sourceFrameOnScreenForShareItem(sharingService: NSSharingService, item: any): NSRect;
  sharingService_transitionImageForShareItem_contentRect(sharingService: NSSharingService, item: any, contentRect: NSRect): NSImage;
  sharingService_sourceWindowForShareItems_sharingContentScope(sharingService: NSSharingService, items: NSArray<any> | any[], sharingContentScope: NSSharingContentScope): NSWindow;
  anchoringViewForSharingService_showRelativeToRect_preferredEdge(sharingService: NSSharingService, positioningRect: NSRect, preferredEdge: NSRectEdge): NSView;
}

