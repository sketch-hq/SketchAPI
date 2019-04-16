interface NSTextCheckingResultUninitialized<InitializedType = NSTextCheckingResult> extends NSObjectUninitialized<NSTextCheckingResult> {}
interface NSTextCheckingResult extends NSObject, INSCopying, INSSecureCoding {
  rangeAtIndex(idx: NSUInteger): NSRange;
  rangeWithName(name: NSString | string): NSRange;
  resultByAdjustingRangesWithOffset(offset: NSInteger): NSTextCheckingResult;

  resultType(): NSTextCheckingType;
  range(): NSRange;
  orthography(): NSOrthography;
  grammarDetails(): NSArray<any>;
  date(): NSDate;
  timeZone(): NSTimeZone;
  duration(): NSTimeInterval;
  components(): NSDictionary<any, any>;
  URL(): NSURL;
  replacementString(): NSString;
  alternativeStrings(): NSArray<any>;
  regularExpression(): NSRegularExpression;
  phoneNumber(): NSString;
  numberOfRanges(): NSUInteger;
  addressComponents(): NSDictionary<any, any>;
}
declare const NSTextCheckingResult: {
  alloc(): NSTextCheckingResultUninitialized;
  class(): NSTextCheckingResult;  orthographyCheckingResultWithRange_orthography(range: NSRange, orthography: NSOrthography): NSTextCheckingResult;
  spellCheckingResultWithRange(range: NSRange): NSTextCheckingResult;
  grammarCheckingResultWithRange_details(range: NSRange, details: NSArray<any> | any[]): NSTextCheckingResult;
  dateCheckingResultWithRange_date(range: NSRange, date: NSDate): NSTextCheckingResult;
  dateCheckingResultWithRange_date_timeZone_duration(range: NSRange, date: NSDate, timeZone: NSTimeZone, duration: NSTimeInterval): NSTextCheckingResult;
  addressCheckingResultWithRange_components(range: NSRange, components: NSDictionary<any, any> | {[key: string]: any}): NSTextCheckingResult;
  linkCheckingResultWithRange_URL(range: NSRange, url: NSURL): NSTextCheckingResult;
  quoteCheckingResultWithRange_replacementString(range: NSRange, replacementString: NSString | string): NSTextCheckingResult;
  dashCheckingResultWithRange_replacementString(range: NSRange, replacementString: NSString | string): NSTextCheckingResult;
  replacementCheckingResultWithRange_replacementString(range: NSRange, replacementString: NSString | string): NSTextCheckingResult;
  correctionCheckingResultWithRange_replacementString(range: NSRange, replacementString: NSString | string): NSTextCheckingResult;
  correctionCheckingResultWithRange_replacementString_alternativeStrings(range: NSRange, replacementString: NSString | string, alternativeStrings: NSArray<any> | any[]): NSTextCheckingResult;
  regularExpressionCheckingResultWithRanges_count_regularExpression(ranges: NSRangePointer, count: NSUInteger, regularExpression: NSRegularExpression): NSTextCheckingResult;
  phoneNumberCheckingResultWithRange_phoneNumber(range: NSRange, phoneNumber: NSString | string): NSTextCheckingResult;
  transitInformationCheckingResultWithRange_components(range: NSRange, components: NSDictionary<any, any> | {[key: string]: any}): NSTextCheckingResult;

}

