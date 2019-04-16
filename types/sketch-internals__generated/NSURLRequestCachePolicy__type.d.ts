declare enum NSURLRequestCachePolicy {
  NSURLRequestUseProtocolCachePolicy = 0,
  NSURLRequestReloadIgnoringLocalCacheData = 1,
  NSURLRequestReloadIgnoringLocalAndRemoteCacheData = 4,
  NSURLRequestReloadIgnoringCacheData,
  NSURLRequestReturnCacheDataElseLoad = 2,
  NSURLRequestReturnCacheDataDontLoad = 3,
  NSURLRequestReloadRevalidatingCacheData = 5,
}

