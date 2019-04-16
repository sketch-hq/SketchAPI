interface SUTestWebServerUninitialized<InitializedType = SUTestWebServer> extends NSObjectUninitialized<SUTestWebServer> {
  initWithPort_workingDirectory(port: number, workingDirectory: NSString | string): InitializedType;
}
interface SUTestWebServer extends NSObject {
  close(): void;
}
declare const SUTestWebServer: {
  alloc(): SUTestWebServerUninitialized;
  class(): SUTestWebServer;
}

