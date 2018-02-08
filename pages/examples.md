---
layout: single-page
title: Examples
permalink: /examples/
script: /js/search.js
---

The following examples should help you to get up & running with Plugin development.

Follow the main link for each one for an annotated view of the source code, or click on the links on the right to try the plugin out or view its github repo.

<table>
  <tbody>

  {% assign plugins = site.generated-plugins %}
  {% for plugin in plugins %}
    <tr>
      <td><a href="{{plugin.url}}">{{plugin.title}}</a></td>
      <td>{{plugin.summary}}</td>
      <td><a href="/examples/plugins/{{plugin.name}}.zip">download</a></td>
      <td><a href="https://github.com/BohemianCoding/plugins.examples.{{plugin.name}}">github</a></td>
    </tr>
  {% endfor %}

  </tbody>
</table>
