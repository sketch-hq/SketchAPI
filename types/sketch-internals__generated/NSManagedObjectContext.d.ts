interface NSManagedObjectContextUninitialized<InitializedType = NSManagedObjectContext> {}

interface NSManagedObjectContext {
}

declare const NSManagedObjectContext: {
  alloc(): NSManagedObjectContextUninitialized;
  class(): NSManagedObjectContext;
}

