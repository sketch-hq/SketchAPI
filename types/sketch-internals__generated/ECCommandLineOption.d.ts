interface ECCommandLineOptionUninitialized<InitializedType = ECCommandLineOption> extends NSObjectUninitialized<ECCommandLineOption> {}
interface ECCommandLineOption extends NSObject {
  mode(): ECCommandLineOptionMode;
  shortOption(): string;
  help(): NSString;
  longUsage(): NSString;
  shortUsage(): NSString;
  defaultValue(): any;

  name(): NSString;
  value(): any;
  setValue(value: any): void;
  hidden(): boolean;
}
declare const ECCommandLineOption: {
  alloc(): ECCommandLineOptionUninitialized;
  class(): ECCommandLineOption;  optionWithName_info(name: NSString | string, info: NSDictionary<any, any> | {[key: string]: any}): ECCommandLineOption;

}

