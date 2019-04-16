interface TDRepetitionUninitialized<InitializedType = TDRepetition> extends TDParserUninitialized<TDRepetition> {
  initWithSubparser(p: TDParser): InitializedType;
}
interface TDRepetition extends TDParser {
  setPreassembler_selector(a: any, sel: string): void;

  subparser(): TDParser;
  preassembler(): any;
  setPreassembler(preassembler: any): void;
  preassemblerSelector(): string;
  setPreassemblerSelector(preassemblerSelector: string): void;
}
declare const TDRepetition: {
  alloc(): TDRepetitionUninitialized;
  class(): TDRepetition;  repetitionWithSubparser(p: TDParser): any;

}

