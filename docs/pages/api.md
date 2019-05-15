---
layout: slate
title: API Reference
permalink: /reference/api/
language_tabs:
  - javascript

toc_footers:
  - <a href='/reference/action/'>Actions references</a>

slate: true

excerpt: Sketch JavaScript API reference
---

{% assign references = site.api-references | where_exp:"item", "item.hidden != true" | sort: 'order' %} {% for ref in references %}

# {{ref.title}}

{{ref.content}}

{% endfor %}
