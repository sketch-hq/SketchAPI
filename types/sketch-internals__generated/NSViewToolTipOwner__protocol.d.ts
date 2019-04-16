interface INSViewToolTipOwner {
  view_stringForToolTip_point_userData(view: NSView, tag: NSToolTipTag, point: NSPoint, data: void | null): NSString;
}

