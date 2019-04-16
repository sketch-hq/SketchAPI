interface NSCalendarDateUninitialized<InitializedType = NSCalendarDate> extends NSDateUninitialized<NSCalendarDate> {}
interface NSCalendarDate extends NSDate {
}
declare const NSCalendarDate: {
  alloc(): NSCalendarDateUninitialized;
  class(): NSCalendarDate;
}

