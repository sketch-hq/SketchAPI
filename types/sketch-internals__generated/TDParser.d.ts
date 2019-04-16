interface TDParserUninitialized<InitializedType = TDParser> extends NSObjectUninitialized<TDParser> {}
interface TDParser extends NSObject {
  setAssembler_selector(a: any, sel: string): void;
  bestMatchFor(inAssembly: TDAssembly): TDAssembly;
  completeMatchFor(inAssembly: TDAssembly): TDAssembly;
  allMatchesFor(inAssemblies: NSSet<any>): NSSet<any>;

  assembler(): any;
  setAssembler(assembler: any): void;
  selector(): string;
  setSelector(selector: string): void;
  name(): NSString;
  setName(name: NSString | string): void;
}
declare const TDParser: {
  alloc(): TDParserUninitialized;
  class(): TDParser;  parser(): any;

}

