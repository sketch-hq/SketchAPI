interface SUScheduledUpdateDriverUninitialized<InitializedType = SUScheduledUpdateDriver> extends SUUIBasedUpdateDriverUninitialized<SUScheduledUpdateDriver> {}

interface SUScheduledUpdateDriver extends SUUIBasedUpdateDriver {
}

declare const SUScheduledUpdateDriver: {
  alloc(): SUScheduledUpdateDriverUninitialized;
  class(): SUScheduledUpdateDriver;
}

