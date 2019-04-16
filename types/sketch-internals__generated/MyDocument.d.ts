interface MyDocumentUninitialized<InitializedType = MyDocument> extends NSDocumentUninitialized<MyDocument> {}
interface MyDocument extends NSDocument {
  toggleShowPoints(sender: any): IBAction;
  toggleSimplifyPath(sender: any): IBAction;
  toggleFitCurve(sender: any): IBAction;
}
declare const MyDocument: {
  alloc(): MyDocumentUninitialized;
  class(): MyDocument;
}

