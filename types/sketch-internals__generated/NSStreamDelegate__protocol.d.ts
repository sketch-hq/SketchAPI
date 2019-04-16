interface INSStreamDelegate {
  stream_handleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;
}

