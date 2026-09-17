---
layout: default
title: 维基
title_en: Wiki
description: 个人知识管理，随手笔记更新备忘。
keywords: 维基, Wiki
permalink: /wiki/
---

<ul>
{% for doc in site.documents %}
{% if doc.title != "Wiki Template" %}
<li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
{% endif %}
{% endfor %}
</ul>
