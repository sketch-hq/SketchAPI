---
title: HandleURL
summary: 'Triggered when Sketch is opened with the following URL scheme: `sketch://plugin/my.plugin.identifier/my.command.identifier`.'
---

{{page.summary}}

## Action Context

The action context for this action contains three keys:

- `url`: the NSURL that triggered this action.
- `path`: a string containing everything after `sketch://plugin` (eg. `/my.plugin.identifier/my.command.identifier`).
- `query`: an object containing the query of the URL (eg. for `sketch://plugin/my.plugin.identifier/my.command.identifier?foo=bar&baz=qux`, `query` will be `{ foo: 'bar', baz: 'quz' }`).
