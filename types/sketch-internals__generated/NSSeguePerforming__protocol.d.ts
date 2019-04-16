interface INSSeguePerforming {
  prepareForSegue_sender(segue: NSStoryboardSegue, sender: any | null): void;
  performSegueWithIdentifier_sender(identifier: NSStoryboardSegueIdentifier, sender: any | null): void;
  shouldPerformSegueWithIdentifier_sender(identifier: NSStoryboardSegueIdentifier, sender: any | null): boolean;
}

