interface NSHTTPCookieStorageUninitialized<InitializedType = NSHTTPCookieStorage> extends NSObjectUninitialized<NSHTTPCookieStorage> {}
interface NSHTTPCookieStorage extends NSObject {
  setCookie(cookie: NSHTTPCookie): void;
  deleteCookie(cookie: NSHTTPCookie): void;
  removeCookiesSinceDate(date: NSDate): void;
  cookiesForURL(URL: NSURL): NSArray<any>;
  setCookies_forURL_mainDocumentURL(cookies: NSArray<any> | any[], URL: NSURL | null, mainDocumentURL: NSURL | null): void;
  sortedCookiesUsingDescriptors(sortOrder: NSArray<any> | any[]): NSArray<any>;
  storeCookies_forTask(cookies: NSArray<any> | any[], task: NSURLSessionTask): void;
  getCookiesForTask_completionHandler(task: NSURLSessionTask, completionHandler: Block): void;

  cookies(): NSArray<any>;
  cookieAcceptPolicy(): NSHTTPCookieAcceptPolicy;
  setCookieAcceptPolicy(cookieAcceptPolicy: NSHTTPCookieAcceptPolicy): void;
}
declare const NSHTTPCookieStorage: {
  alloc(): NSHTTPCookieStorageUninitialized;
  class(): NSHTTPCookieStorage;  sharedCookieStorageForGroupContainerIdentifier(identifier: NSString | string): NSHTTPCookieStorage;

  sharedHTTPCookieStorage(): NSHTTPCookieStorage;

}

