---
title: Shutdown
summary: Triggered when the plugin is unloaded
documented: true
related:
  - Startup
---

This action is triggered when the plugin is unloaded by Sketch.

This can happen in any of these scenarios:

- Your plugin is being disabled
- Your plugin is being uninstalled
- Sketch is shutting down

You can use this action to cleanup your plugin’s data, store any information you want to persist between sessions, etc…

