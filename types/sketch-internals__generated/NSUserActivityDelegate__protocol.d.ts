interface INSUserActivityDelegate {
  userActivityWillSave(userActivity: NSUserActivity): void;
  userActivityWasContinued(userActivity: NSUserActivity): void;
  userActivity_didReceiveInputStream_outputStream(userActivity: NSUserActivity, inputStream: NSInputStream, outputStream: NSOutputStream): void;
}

