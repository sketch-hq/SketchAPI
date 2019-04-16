interface INSURLSessionDataDelegate {
  URLSession_dataTask_didReceiveResponse_completionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, response: NSURLResponse, completionHandler: Block): void;
  URLSession_dataTask_didBecomeDownloadTask(session: NSURLSession, dataTask: NSURLSessionDataTask, downloadTask: NSURLSessionDownloadTask): void;
  URLSession_dataTask_didBecomeStreamTask(session: NSURLSession, dataTask: NSURLSessionDataTask, streamTask: NSURLSessionStreamTask): void;
  URLSession_dataTask_didReceiveData(session: NSURLSession, dataTask: NSURLSessionDataTask, data: NSData): void;
  URLSession_dataTask_willCacheResponse_completionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, proposedResponse: NSCachedURLResponse, completionHandler: Block): void;
}

