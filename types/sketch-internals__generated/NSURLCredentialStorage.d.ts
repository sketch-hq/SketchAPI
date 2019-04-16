interface NSURLCredentialStorageUninitialized<InitializedType = NSURLCredentialStorage> extends NSObjectUninitialized<NSURLCredentialStorage> {}
interface NSURLCredentialStorage extends NSObject {
  credentialsForProtectionSpace(space: NSURLProtectionSpace): NSDictionary<any, any>;
  setCredential_forProtectionSpace(credential: NSURLCredential, space: NSURLProtectionSpace): void;
  removeCredential_forProtectionSpace(credential: NSURLCredential, space: NSURLProtectionSpace): void;
  removeCredential_forProtectionSpace_options(credential: NSURLCredential, space: NSURLProtectionSpace, options: NSDictionary<any, any> | {[key: string]: any} | null): void;
  defaultCredentialForProtectionSpace(space: NSURLProtectionSpace): NSURLCredential;
  setDefaultCredential_forProtectionSpace(credential: NSURLCredential, space: NSURLProtectionSpace): void;
  getCredentialsForProtectionSpace_task_completionHandler(protectionSpace: NSURLProtectionSpace, task: NSURLSessionTask, completionHandler: Block): void;
  setCredential_forProtectionSpace_task(credential: NSURLCredential, protectionSpace: NSURLProtectionSpace, task: NSURLSessionTask): void;
  removeCredential_forProtectionSpace_options_task(credential: NSURLCredential, protectionSpace: NSURLProtectionSpace, options: NSDictionary<any, any> | {[key: string]: any} | null, task: NSURLSessionTask): void;
  getDefaultCredentialForProtectionSpace_task_completionHandler(space: NSURLProtectionSpace, task: NSURLSessionTask, completionHandler: Block): void;
  setDefaultCredential_forProtectionSpace_task(credential: NSURLCredential, protectionSpace: NSURLProtectionSpace, task: NSURLSessionTask): void;

  allCredentials(): NSDictionary<any, any>;
}
declare const NSURLCredentialStorage: {
  alloc(): NSURLCredentialStorageUninitialized;
  class(): NSURLCredentialStorage;
  sharedCredentialStorage(): NSURLCredentialStorage;

}

