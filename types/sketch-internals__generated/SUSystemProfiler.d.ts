interface SUSystemProfilerUninitialized<InitializedType = SUSystemProfiler> extends NSObjectUninitialized<SUSystemProfiler> {}
interface SUSystemProfiler extends NSObject {
}
declare const SUSystemProfiler: {
  alloc(): SUSystemProfilerUninitialized;
  class(): SUSystemProfiler;  systemProfileArrayForHost(host: SUHost): NSArray<any>;

}

