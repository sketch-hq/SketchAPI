---
title: async
order: 404
section: API
---

```javascript
var fiber = require('sketch/async').createFiber()
longRunningTask(function(err, result) {
  fiber.cleanup()
  // you can continue working synchronously here
})
```

By default, Sketch cleans up your script as soon as its call-stack is empty. So if you schedule an asynchronous task, chances are that when the task returns, your script will be cleaned up and it will crash Sketch.

A fiber is a way to keep track of a asynchronous task. The script will stay alive as long as at least one fiber is running.

To end a fiber, call `fiber.cleanup()`. This will tell Sketch that it can garbage collect the script if no other fiber is running.

You can run a function when the fiber is about to be cleaned up by setting a callback: `fiber.onCleanup(function () {...})`. Always do your clean up in this function instead of doing before calling `fiber.cleanup`: there might be some cases where the fiber will be cleaned up by Sketch so you need to account for that.
