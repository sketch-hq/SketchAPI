interface ICOPrintController {
  scriptHadException(exception: NSException | Error): void;
  print(s: any): void;
}

