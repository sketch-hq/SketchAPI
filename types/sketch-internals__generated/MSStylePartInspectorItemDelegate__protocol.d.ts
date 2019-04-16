interface IMSStylePartInspectorItemDelegate {
  stylePartInspectorItemDocument(inspectorItem: NSViewController): MSDocument;
  valuesPossiblyChanged(item: NSViewController): void;
}

