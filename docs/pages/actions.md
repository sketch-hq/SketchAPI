---
layout: sidebar-page
title: Actions Reference
permalink: /reference/action/
script: /js/search.js

excerpt: List of all actions Sketch plugins can respond to
---

Plugins can respond to the following actions. If you want to learn how to listen to an action, see [the Action API guide](/plugins/actions).

## List of Actions

<table>
  <tbody>
  {% assign states = site.actions | group_by: 'documented' | reverse %}
  {% for state in states %}
    {% assign actions = state.items | sort: 'title' %}
    {% for action in actions %}
    <tr>
      <td><a href="{{action.url}}">{{action.title}}</a></td>
      <td>{{action.summary}}</td>
    </tr>
    {% endfor %}
  {% endfor %}
  </tbody>
</table>
