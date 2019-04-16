interface IMSInspectorSection {
  views(): NSArray<any>;
  wantsSeparatorAfterViews(): boolean;
  separatorInsets(): NSEdgeInsets;
  footerViews(): NSArray<any>;
}

