interface INSStackViewDelegate {
  stackView_willDetachViews(stackView: NSStackView, views: NSArray<any> | any[]): void;
  stackView_didReattachViews(stackView: NSStackView, views: NSArray<any> | any[]): void;
}

