---
title: Startup
summary: Triggered when the plugin is loaded
documented: true
related:
  - Shutdown
---

This action is triggered when the plugin is loaded by Sketch.

This can happen in any of these scenarios:

- Your plugin is installed
- Your plugin is enabled after being disabled
- Sketch launches

You can use this action to do any operations that are needed for your plugin to work (read user settings, download data, etc)
