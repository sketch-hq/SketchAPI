interface INSURLSessionStreamDelegate {
  URLSession_readClosedForStreamTask(session: NSURLSession, streamTask: NSURLSessionStreamTask): void;
  URLSession_writeClosedForStreamTask(session: NSURLSession, streamTask: NSURLSessionStreamTask): void;
  URLSession_betterRouteDiscoveredForStreamTask(session: NSURLSession, streamTask: NSURLSessionStreamTask): void;
  URLSession_streamTask_didBecomeInputStream_outputStream(session: NSURLSession, streamTask: NSURLSessionStreamTask, inputStream: NSInputStream, outputStream: NSOutputStream): void;
}

