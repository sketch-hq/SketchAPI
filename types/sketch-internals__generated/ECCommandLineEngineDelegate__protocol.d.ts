interface IECCommandLineEngineDelegate {
  engineDidFinishLaunching(engine: ECCommandLineEngine): void;
  engine_willProcessCommands(engine: ECCommandLineEngine, commands: NSArray<any> | any[]): void;
  engine_didProcessCommands(engine: ECCommandLineEngine, commands: NSArray<any> | any[]): void;
}

