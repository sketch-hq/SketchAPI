interface ICOPrintController {
  scriptEncounteredException(exception: NSException | Error): void;
  print(s: any): void;
}

