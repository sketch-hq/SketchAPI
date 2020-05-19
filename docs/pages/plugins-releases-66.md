---
title: New in Sketch 66
section: plugins
chapter: JavaScript API Updates
permalink: /plugins/updates/new-in-sketch-66

order: 493
excerpt: Summary of the public API changes introduced with Sketch 66
---

Released 19 May, 2020 – [_read release notes_](https://www.sketch.com/updates/#version-66)

## Changes

### API v1.0 removal

The legacy scripting API for plugins was long overdue for retirement, so it has finally been removed. From now on, plugins will need to use [v2.0 of the JavaScript API](/reference/api).

All of the features of API v1.0 are present in v2.0, except `api.resourceNamed()`, which can be replaced with `context.plugin.urlForResourceNamed()` or the `resourcePath` method in [`skpm/path`](https://github.com/skpm/path).

## Related resources

- [API reference](/reference/api)
- [New in Sketch 64](/plugins/updates/new-in-sketch-64)
