interface INSKeyedUnarchiverDelegate {
  unarchiver_cannotDecodeObjectOfClassName_originalClasses(unarchiver: NSKeyedUnarchiver, name: NSString | string, classNames: NSArray<any> | any[]): any;
  unarchiver_willReplaceObject_withObject(unarchiver: NSKeyedUnarchiver, object: any, newObject: any): void;
  unarchiverWillFinish(unarchiver: NSKeyedUnarchiver): void;
  unarchiverDidFinish(unarchiver: NSKeyedUnarchiver): void;
}

