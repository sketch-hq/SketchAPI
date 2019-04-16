interface INSNetServiceBrowserDelegate {
  netServiceBrowserWillSearch(browser: NSNetServiceBrowser): void;
  netServiceBrowserDidStopSearch(browser: NSNetServiceBrowser): void;
  netServiceBrowser_didNotSearch(browser: NSNetServiceBrowser, errorDict: NSDictionary<any, any> | {[key: string]: any}): void;
  netServiceBrowser_didFindDomain_moreComing(browser: NSNetServiceBrowser, domainString: NSString | string, moreComing: boolean): void;
  netServiceBrowser_didFindService_moreComing(browser: NSNetServiceBrowser, service: NSNetService, moreComing: boolean): void;
  netServiceBrowser_didRemoveDomain_moreComing(browser: NSNetServiceBrowser, domainString: NSString | string, moreComing: boolean): void;
  netServiceBrowser_didRemoveService_moreComing(browser: NSNetServiceBrowser, service: NSNetService, moreComing: boolean): void;
}

