interface NSPipeUninitialized<InitializedType = NSPipe> extends NSObjectUninitialized<NSPipe> {}
interface NSPipe extends NSObject {

  fileHandleForReading(): NSFileHandle;
  fileHandleForWriting(): NSFileHandle;
}
declare const NSPipe: {
  alloc(): NSPipeUninitialized;
  class(): NSPipe;  pipe(): NSPipe;

}

