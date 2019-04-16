interface INSSpeechRecognizerDelegate {
  speechRecognizer_didRecognizeCommand(sender: NSSpeechRecognizer, command: NSString | string): void;
}

