interface INSURLSessionTaskDelegate {
  URLSession_task_willBeginDelayedRequest_completionHandler(session: NSURLSession, task: NSURLSessionTask, request: NSURLRequest, completionHandler: Block): void;
  URLSession_taskIsWaitingForConnectivity(session: NSURLSession, task: NSURLSessionTask): void;
  URLSession_task_willPerformHTTPRedirection_newRequest_completionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: Block): void;
  URLSession_task_didReceiveChallenge_completionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: Block): void;
  URLSession_task_needNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: Block): void;
  URLSession_task_didSendBodyData_totalBytesSent_totalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;
  URLSession_task_didFinishCollectingMetrics(session: NSURLSession, task: NSURLSessionTask, metrics: NSURLSessionTaskMetrics): void;
  URLSession_task_didCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError | null): void;
}

