interface INSKeyedArchiverDelegate {
  archiver_willEncodeObject(archiver: NSKeyedArchiver, object: any): any;
  archiver_didEncodeObject(archiver: NSKeyedArchiver, object: any | null): void;
  archiver_willReplaceObject_withObject(archiver: NSKeyedArchiver, object: any | null, newObject: any | null): void;
  archiverWillFinish(archiver: NSKeyedArchiver): void;
  archiverDidFinish(archiver: NSKeyedArchiver): void;
}

