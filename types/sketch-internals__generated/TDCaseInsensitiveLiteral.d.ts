interface TDCaseInsensitiveLiteralUninitialized<InitializedType = TDCaseInsensitiveLiteral> extends TDLiteralUninitialized<TDCaseInsensitiveLiteral> {}
interface TDCaseInsensitiveLiteral extends TDLiteral {
}
declare const TDCaseInsensitiveLiteral: {
  alloc(): TDCaseInsensitiveLiteralUninitialized;
  class(): TDCaseInsensitiveLiteral;
}

